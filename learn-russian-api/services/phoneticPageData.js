var request = require('request')
var PhoneticPageDataServiceHandler = require('./serviceHandlers/PhoneticPageDataServiceHandler')

function fetchPhoneticData(url) {
  return new Promise((resolve, reject) => {
    request(word, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        PhoneticPageDataServiceHandler.setupHandler(body, resolve, word)
      } else {
        reject(err);
      }
    });
  });
}

return (module.exports = fetchPhoneticData);
