const AWS = require('aws-sdk')

module.exports.test = async (event, context) => {
  let lambda = new AWS.Lambda()
  let params = {
    FunctionName: 'chaining-lambda-dev-test2'
  }
  lambda.invoke(params, function (err, data){
    if (err) {
      console.log('error : ' + err)
      return err
    } else if (data) {
      const response = {
        statusCode: 200,
        body: JSON.parse(data.Payload)
      }
      return response
    }
  })
}

module.exports.test2 = async (event, context) => {
  return {message: 'testing functionality 2'}
}
