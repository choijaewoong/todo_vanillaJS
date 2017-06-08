(function (window) {
	'use strict';

    function Todos(storage) {
        this.active = 0;
        this.completed = 0;
        this.total = 0;
        // this.todoArr = {};
        this.storage = storage;
    }
    function Todo(todo) {
        this.id = todo.id;
        this.title = todo.title;
        this.isCompleted = todo.isCompleted;
    }

    Todos.prototype.create = function() {
        
    }
    Todos.prototype.read = function(callback) {
        this.storage.findAll(callback);
    }
    Todos.prototype.update = function() {

    }
    Todos.prototype.delete = function() {
        
    }

    // Export to window
    window.app = window.app || {};
    window.app.Todos = Todos;
    window.app.Todo = Todo;

})(window);
