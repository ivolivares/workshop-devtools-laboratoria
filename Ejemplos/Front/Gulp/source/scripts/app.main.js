var $ = require('../../bower_components/jquery/dist/jquery'),
    Todos = require('./app.todos');

$(document).on('ready', function() {
  var todoList = new Todos();
  todoList.init();
});