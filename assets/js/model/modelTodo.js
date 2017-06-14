(function (window) {
	'use strict';

    function Todos(storage) {
        this.active = 0;
        this.completed = 0;
        this.total = 0;
        this.storage = storage;
    }
    // function Todo(todo) {
    //     this.id = todo.id;
    //     this.title = todo.title;
    //     this.isCompleted = todo.isCompleted;
    // }

    Todos.prototype.create = function(callback, title) {
        this.storage.saveAll(callback, title);
    }
    Todos.prototype.read = function(callback, query) {
        var type = typeof(query);
        switch(type) {
            case "undefined" : 
                this.storage.findAll(callback);
                break;
            case "boolean" :
                this.storage.findAll(calllback);
            case "string" :
            case "number" :
                 console.log("error");
            default :
                break;
        }
    }
    Todos.prototype.update = function() {

    }
    Todos.prototype.delete = function() {

    }

    // Export to window
    window.app = window.app || {};
    window.app.Todos = Todos;
    // window.app.Todo = Todo;

})(window);
