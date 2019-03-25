# plcrashreport-decoder

A decoder for iOS/macOS crash reports generated by [PLCrashReporter](https://www.plcrashreporter.org/)

[![badge](https://img.shields.io/npm/v/plcrashreport-decoder.svg?color=blue)](https://www.npmjs.com/package/plcrashreport-decoder)

## Installation

```
npm install plcrashreport-decoder --save
```

## Usage

### Module

```javascript
// import
const CrashReport = require('plcrashreport-decoder');

// read crash report file
const fs = require('fs');
let buffer = fs.readFileSync('path/to/crashreport');

// create a CrashReport object. The constructor accepts both Buffer and Array ([number])
let cp = new CrashReport(buffer);

// get the decoded JSON
let decoded = cp.toJSON();
```

### CLI

Please run `npm link` before using CLI.

```shell
pl-decode example.plcrash -t json
```

#### Parameters

`-t`: Type of decoded crash report. Can be `string` or `json`.

## Acknowledgement

* [PLCrashReporter](https://www.plcrashreporter.org/)
* [protobuf.js](https://github.com/dcodeIO/ProtoBuf.js/)

## License

The project is released under MIT license. Please see [LICENSE](LICENSE) for full terms.