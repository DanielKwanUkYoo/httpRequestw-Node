var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


  https.get(requestOptions, function(response) {
    if (response.statusCode !== 200) {
      callback(new Error('Request failed' + response.statusCode), null);
      return;
    }


    response.setEncoding('utf-8');

    response.on('data', function(chunk) {
      console.log(chunk, '\n');

    });

  });
};

getAndPrintHTMLChunks()