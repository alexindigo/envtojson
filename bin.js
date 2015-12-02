#!/usr/bin/env node
var firstArg = process.argv[2];
var indent = isNaN(firstArg) ? 0 : parseInt(firstArg);

process.stdout.write(JSON.stringify(process.env, null, indent));
