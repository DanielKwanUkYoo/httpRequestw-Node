var getHTML = require('../https-function')


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse (html) {
  console.log(html.split('').reverse().join(''))

};

getHTML(requestOptions, reverse);