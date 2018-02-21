const { createInstance, terminateInstance } = require('./modules/aws');

const minutesToMs = minutes => minutes * 60000;

// wait in minutes
const timeout = minutes => {
  return new Promise(resolve => setTimeout(resolve, minutesToMs(minutes)));
};

const createThenTerminateInstance = async (amiId, minsToKeepAlive) => {
  const createResponse = await createInstance(process.argv[2]);
  const newInstanceId = createResponse.Instances[0].InstanceId;
  console.log(
    `Created a new Instance with ID ${newInstanceId} from AMI with ID ${
      amiId
    } on ${new Date().toString()}`
  );
  await timeout(process.argv[3]);
  const terminateResponse = await terminateInstance(newInstanceId);
  console.log(`Instance with ID ${newInstanceId} set for termination.`);
};

(async () => {
  try {
    if (process.argv.length == 5) {
      setInterval(
        () => createThenTerminateInstance(process.argv[2], process.argv[3]),
        minutesToMs(process.argv[4])
      );
    } else {
      console.log(
        'usage: node create-then-terminate-instance.js [AMI ID] [minutes to keep instance alive] [minutes before repeating]'
      );
    }
  } catch (error) {
    console.log(error);
  }
})();
