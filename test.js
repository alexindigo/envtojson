var assert = require('assert');
var execFile = require('child_process').execFile;

var env = ['PATH'].reduce(function(env, key) {
  env[key] = process.env[key];
  return env;
}, {
  VAR0: 'value0',
  VAR1: 'value1',
  VAR2: 'value2'
});

execFile('./bin.js', {env: env}, function (error, stdout, stderr) {

  if (error) {
      throw new Error('program exited with an error:', error.stack);
  }

  if (stderr) {
      throw new Error('program printed some error:', stderr);
  }

  var rawResult = JSON.parse(stdout);

  // Only extract original keys, strip out variables created by shell
  var comparableResult = Object.keys(env).reduce(function(result, key){
      result[key] = rawResult[key];
      return result;
  }, {});

  assert.deepEqual(comparableResult, env);
  console.log('default behavior: ✓');
});

execFile('./bin.js', ['10'], {env: env}, function (error, stdout, stderr) {
  if (error) {
      throw new Error('program exited with an error');
  }

  if (stderr) {
      throw new Error('program printed some error:', stderr);
  }

  // Just check for 10 spaces
  assert(stdout.indexOf('          ') > -1);
  console.log('optional indentation: ✓');
});
