var $ = require('../../bower_components/jquery/dist/jquery'),
    _ = require('../../bower_components/underscore/underscore');

var Todos = function() {
  this.getTasks = function(callback) {
      $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/todos"
      })
      .done(function( tasks ) {
        return callback(tasks);
      });
  };

  this.renderTasks = function(tasks) {
    _.each(tasks, function(task) {
      $('ul').append('<li>' + task.text + '</li>');
    });
  };

  var self = this;

  return {
    init: function() {
      self.getTasks(function(tasks) {
        self.renderTasks(tasks);
      });
    }
  };
}

module.exports = Todos;
