
const functions = require('firebase-functions');



exports.scheduledFunctionCrontab = functions.pubsub.schedule('* * * * 1')
  .timeZone('America/New_York') // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
  console.log('This will be run every day at 11:05 AM Eastern!');
  return null;
});
exports.myFunction = functions.pubsub.topic('btc').onPublish((message, context) => {
  console.log('The function was triggered at ', context.timestamp);
  console.log('The unique ID for the event is', context.eventId);
});

