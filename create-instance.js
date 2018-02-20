const { createInstance } = require('./modules/aws');

if (process.argv.length == 3) {
  createInstance(process.argv[2]);
} else {
  console.log('usage: node create-instance.js [AMI ID]');
}
