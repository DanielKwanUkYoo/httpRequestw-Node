var https = require('https');


function getAndPrintHTML (options) {
  var url = {
      host: options.host,
      path: options.path
  };

    https.get(url, function(response) {

      response.setEncoding('utf-8');

      var body = '';

      response.on('data', function(chunk) {
        body += chunk;
      response.on('end', function() {
        console.log(body);

      });
    });
  });
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);