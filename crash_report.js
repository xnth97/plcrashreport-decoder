const { plcrash } = require('./compiled');

/**
 * CrashReport class
 */
class CrashReport {
  /**
   * Construct a CrashReport object.
   * @param {*} data Can be Buffer or Array ([number]).
   */
  constructor(data) {
    if (data instanceof Buffer) {
      this.dataBuffer = data;
    } else if (data instanceof Array) {
      this.dataBuffer = Buffer.from(data);
    }

    const crashReportHeaderLength = 8;
    let buffer = this.dataBuffer.slice(crashReportHeaderLength, data.length);
    this.decoded = plcrash.CrashReport.decode(buffer);
    this.decodedDict = this.decoded.toJSON();
  }

  /**
   * @returns {Buffer} Raw buffer of crash report.
   */
  rawBuffer() {
    return this.dataBuffer;
  }

  /**
   * @returns {object} Decoded crash report object with Protobuf.
   */
  decoded() {
    return this.decoded;
  }

  /**
   * @returns {object} Decoded crash report in JSON format.
   */
  toJSON() {
    return this.decodedDict;
  }

  /**
   * @returns {string} Decoded crash report in formatted string.
   */
  toString() {
    let decodedStr = '\n\nFormatted Crash Report\n\n';
    for (let key of ['systemInfo', 'applicationInfo', 'processInfo', 'machineInfo', 'signal']) {
      for (let k in this.decodedDict[key]) {
        if (k === 'processor') {
          decodedStr += `${k.padEnd(40)}${this.decodedDict[key]['processor']['type']}\n`;
        } else {
          decodedStr += `${k.padEnd(40)}${this.decodedDict[key][k]}\n`;
        }
      }
    }

    decodedStr += '\n\n';

    for (let threadDict of this.decodedDict['threads']) {
      let tmp = `Thread ${threadDict['threadNumber']}\n\n`;

      if (threadDict['crashed'] === true) {
        tmp += 'Thread crashed with registers\n\n';
        for (let reg of threadDict['registers']) {
          tmp += `${reg['name']}\t\t0x${Number(reg['value']).toString(16)}\n`;
        }
        tmp += '\n';
      }

      for (let idx = 0; idx < threadDict['frames'].length; idx++) {
        let fr = threadDict['frames'][idx];
        if ('pc' in fr) {
          let pc = Number(fr['pc']);
          if ('symbol' in fr) {
            let startAddress = Number(fr['symbol']['startAddress']);
            tmp += `${idx}\t\t0x${startAddress.toString(16)}\t${fr['symbol']['name']} + ${pc - startAddress}\n`;
          } else {
            tmp += `${idx}\t\t${pc.toString(16)}\n`;
          }
        }
      }

      decodedStr += `${tmp}\n\n`;
    }

    decodedStr += 'Binary Images\n\n';

    for (let binaryDict of this.decodedDict['binaryImages']) {
      let baseAddress = Number(binaryDict['baseAddress']);
      let size = Number(binaryDict['size']);
      let endAddress = baseAddress + size;
      decodedStr += `0x${baseAddress.toString(16)} - 0x${endAddress.toString(16)}\t\t${binaryDict['name']}\n`;
    }

    decodedStr += '\n\n';

    return decodedStr;
  }
}

module.exports = CrashReport;