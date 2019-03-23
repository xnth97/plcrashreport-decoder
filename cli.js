#!/usr/bin/env node
const CrashReport = require('./crash_report');
const fs = require('fs');

let argv = require('yargs')
  .option('t', {
    alias: 'type',
    default: 'string',
    describe: 'Type of decoded crash report ( string | json )',
    type: 'string'
  })
  .usage('pl-decode <path_to_crash_report> [options]')
  .example('pl-decode example.plcrash -t json', 'Decode example.plcrash and export as JSON')
  .help('h')
  .alias('h', 'help')
  .epilog('Copyright 2019 Yubo Qin')
  .argv;

if (argv._.length < 1) {
  console.error('ERROR: Please provide a crash report file.');
  process.exit(0);
}

const filepath = argv._[0];
if (!fs.existsSync(filepath)) {
  console.error('ERROR: Crash report file does not exist.');
  process.exit(0);
}

let buffer = fs.readFileSync(filepath);
let crashReport = new CrashReport(buffer);

if (argv.t === 'string') {
  console.log(crashReport.toString());
} else if (argv.t === 'json') {
  console.log(crashReport.toJSON());
} else {
  console.error('ERROR: Unsupported type parameter.');
}
