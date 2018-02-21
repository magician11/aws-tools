const { createInstance } = require('./modules/aws');

(async () => {
  try {
    if (process.argv.length == 3) {
      const response = await createInstance(process.argv[2]);
      console.log(JSON.stringify(response, null, 2));
    } else {
      console.log('usage: node create-instance.js [AMI ID]');
    }
  } catch (error) {
    console.log(error);
  }
})();
