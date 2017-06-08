(function (window) {
	'use strict';
    function ViewTodo(template) {
        this.template = template;        
    }

    ViewTodo.prototype.showTodoList = function(data) { 
        var $todoList = document.querySelector('.todo-list');
        var keys = [], key = '';

        var listItem = this.template.getAllTodos(data.todoArr);        
        $todoList.innerHTML = listItem;
    }

    // Export to window
	window.app = window.app || {};
	window.app.ViewTodo = ViewTodo;

})(window);