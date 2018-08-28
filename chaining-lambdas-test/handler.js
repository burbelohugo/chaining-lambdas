const AWS = require('aws-sdk')

module.exports.test = async (event, context) => {
  let lambda = new AWS.Lambda()
  let params = {
    FunctionName: 'chaining-lambda-dev-test2'
  }
  // lambda.invoke(params, function (err, data){
  //   if (err) {
  //     console.log('error : ' + err)
  //     callback(err, null)
  //   } else if (data) {
  //     const response = {
  //       statusCode: 200,
  //       body: JSON.parse(data.Payload)
  //     }
  //     callback(null, response)
  //   }
  // })
  return (null, {message: 'testing functionality'})
}

module.exports.test2 = async (event, context) => {
  return (null, {message: 'testing functionality 2'})
}
