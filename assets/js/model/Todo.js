(function (window) {
	'use strict';

    function Todos() {
        this.active = 0;
        this.completed = 0;
        this.total = 0;
        this.todoArr = {};
    }

    function Todo(todo) {
        this.id = todo.id;
        this.title = todo.title;
        this.state = todo.state;
    }

    // Export to window
    window.app = window.app || {};
	window.app.Todos = Todos;
    window.app.Todo = Todo;
    

})(window);
