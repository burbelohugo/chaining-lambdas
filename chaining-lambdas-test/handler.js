const AWS = require('aws-sdk')

module.exports.hello = (event, context, callback) => {

var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
    var sns = new AWS.SNS();
    console.log('arn:aws:sns:us-east-1:382494799516:ciao-dev')
    sns.publish({
        Message: 'Test publish to SNS from Lambda',
        TopicArn: 'arn:aws:sns:us-east-1:382494799516:ciao-dev'
    }, function(err, data) {
        if (err) {
            console.log(err.stack);
            return;
        }
        console.log('push sent');
        console.log(data);
        callback(null, { message: 'yay!' })
    });

}

module.exports.ciao = (event, context, callback) => {
  callback(null, { message: 'ciao world!' })
}
