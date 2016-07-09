
var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function(err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

module.exports = function(app) {

    // get all todos
    app.get('/api/todos', function(req, res) {
        // use mongoose to get all todos in the database
        getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function(req, res) {
        Todo.create({
            text: req.body.text
        }, function(err, todo) {
            if (err) res.send(err);
            getTodos(res);
        });
    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function(err, todo) {
            if (err) res.send(err);
            getTodos(res);
        });
    });

    // application
    app.get('/*', function(req, res) {
        res.send('Laboratoria TodoApp');
    });
}; 