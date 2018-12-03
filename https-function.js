var https = require('https');



module.exports = function getHTML (options, callback) {

  var url = {
      host: options.host,
      path: options.path
  };

  https.get(url, function(response) {
    response.setEncoding('utf-8');

    var body = '';

    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      callback(body);
    });

  })
}





