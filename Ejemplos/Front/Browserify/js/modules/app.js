var hello = require('./hello.js'),
    $ = require('jquery');

$(function() {
  hello('Juan');
  console.log('jQuery Ready'); 
});