var https = require('https');

function getHTML (options, callback) {
  var url = {
      host: options.host,
      path: options.path
  };

  https.get(url, function(response) {
    response.setEncoding('utf-8');

    response.on('data', function(chunk){
      callback(chunk);
    })

  })
}





function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);