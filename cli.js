#!/usr/bin/env node
const CrashReport = require('./crash_report');
const fs = require('fs');
const program = require('commander');
const package = require('./package.json');
const util = require('util');

program
  .version(package.version, '-v, --version', 'output the version number')
  .description(package.description)
  .usage('<path_to_crash_report> [options]')
  .option('-f, --format <format>', 'format of decoded crash report [default | string | json]', 'default');

program.parse(process.argv);

if (program.args.length < 1) {
  console.error('ERROR: Please provide a crash report file.');
  process.exit(0);
}

const filepath = program.args[0];
if (!fs.existsSync(filepath)) {
  console.error('ERROR: Crash report file does not exist.');
  process.exit(0);
}

let buffer = fs.readFileSync(filepath);
let crashReport = new CrashReport(buffer);

const opts = program.opts();

const outputFormat = opts.format.toLowerCase();
if (outputFormat === 'default') {
  console.log(util.inspect(crashReport.toJSON(), { depth: null, colors: true, maxArrayLength: null }));
} else if (outputFormat === 'string') {
  console.log(crashReport.toString());
} else if (outputFormat === 'json') {
  console.log(JSON.stringify(crashReport.toJSON(), null, 4));
} else {
  console.error('ERROR: Unsupported format parameter.');
}
