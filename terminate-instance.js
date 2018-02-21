const { terminateInstance } = require('./modules/aws');

(async () => {
  try {
    if (process.argv.length == 3) {
      const response = await terminateInstance(process.argv[2]);
      console.log(JSON.stringify(response, null, 2));
    } else {
      console.log('usage: node terminate-instance.js [Instance ID]');
    }
  } catch (error) {
    console.log(error);
  }
})();
