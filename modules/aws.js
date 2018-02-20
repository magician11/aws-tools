const AWS = require('aws-sdk');

// API: https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html
// inspiration: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ec2-example-creating-an-instance.html
const createInstance = async imageId => {
  try {
    // docs: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-json-file.html
    AWS.config.loadFromPath('./config.json');
    const instanceParams = {
      ImageId: imageId,
      InstanceType: 't2.micro', // free tier eligible: 1 vCPU and 1 GB memory
      MinCount: 1,
      MaxCount: 1
    };

    // Create a promise on an EC2 service object
    var instancePromise = new AWS.EC2({ apiVersion: '2016-11-15' })
      .runInstances(instanceParams)
      .promise();

    const data = await instancePromise;
    return data;
  } catch (error) {
    throw `${error.code}: ${error.message}`;
  }
};

module.exports = {
  createInstance
};
