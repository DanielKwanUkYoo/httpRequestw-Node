var getHTML = require('../https-function')


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function upperCase (html) {
  console.log(html.toUpperCase())
};

getHTML(requestOptions, upperCase);