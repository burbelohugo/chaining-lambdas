const AWS = require('aws-sdk')

module.exports.hello = (event, context, callback) => {
  var lambda = new AWS.Lambda()
  var opts = {
    FunctionName: 'chaining-lambdas-test-dev-ciao'
  }

  lambda.invoke(opts, function (err, data) {
    if (err) {
      console.log('error : ' + err)
      callback(err, null)
    } else if (data) {
      const response = {
        statusCode: 200,
        body: JSON.parse(data.Payload)
      }
      callback(null, response)
    }
  })
}

module.exports.ciao = (event, context, callback) => {
  callback(null, { message: 'ciao world!' })
}
