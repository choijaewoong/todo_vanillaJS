(function (window) {
	'use strict';
    function ViewTodo(template) {
        this.template = template;        
    }

    ViewTodo.prototype.showTodoList = function(todos) { 
        var $todoList = document.querySelector('.todo-list');
        var keys = [], key = '';

        var listItem = this.template.getAllTodos(todos.todoArr);        
        $todoList.innerHTML = listItem;
    }

    // Export to window
	window.app = window.app || {};
	window.app.ViewTodo = ViewTodo;

})(window);