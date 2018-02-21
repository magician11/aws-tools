const { createInstance, terminateInstance } = require('./modules/aws');

const minutesToMs = minutes => minutes * 60000;

// wait in minutes
const timeout = minutes => {
  return new Promise(resolve => setTimeout(resolve, minutesToMs(minutes)));
};

(async () => {
  try {
    if (process.argv.length == 5) {
      while (true) {
        const amiId = process.argv[2];
        const createResponse = await createInstance(amiId);
        const newInstanceId = createResponse.Instances[0].InstanceId;
        console.log(
          `Created a new Instance with ID ${newInstanceId} from AMI with ID ${
            amiId
          } on ${new Date().toString()}`
        );
        const minsToKeepAlive = process.argv[3];
        console.log(
          `Keeping this Instance alive for ${minsToKeepAlive} minutes...`
        );
        await timeout(minsToKeepAlive);

        const terminateResponse = await terminateInstance(newInstanceId);
        console.log(
          `Instance with ID ${
            newInstanceId
          } has been set for termination on ${new Date().toString()}`
        );
        const minutesToWait = process.argv[4];
        console.log(
          `Waiting ${minutesToWait} minutes before repeating this cycle.\n`
        );
        await timeout(minutesToWait);
      }
    } else {
      console.log(
        'usage: node create-then-terminate-instance.js [AMI ID] [minutes to keep instance alive] [minutes before repeating]'
      );
    }
  } catch (error) {
    console.log(error);
  }
})();
