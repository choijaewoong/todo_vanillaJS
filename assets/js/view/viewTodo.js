(function (window) {
	'use strict';
    function ViewTodo(template) {
        this.template = template;
    }

    ViewTodo.prototype.showTodoList = function(data) { 
        var $todoList = document.querySelector('.todo-list');
        var listItem = this.template.getAllTodos(data);        
        $todoList.innerHTML = listItem;
    }
    ViewTodo.prototype.addTodo = function() {
        var $newTodo = document.querySelector('.new-todo');
    }

    ViewTodo.prototype.bindAddTodoEvent = function(handler) {
        var $newTodo = document.querySelector('.new-todo');
        $newTodo.addEventListener('keyup', function() {
            if (event.keyCode == 13) {
                handler($newTodo.value);
            }
        });
    }

    ViewTodo.prototype.clearNewTodo = function() {
        console.log("sss");
        var $newTodo = document.querySelector('.new-todo');
        $newTodo.value = '';
    }

    // Export to window
	window.app = window.app || {};
	window.app.ViewTodo = ViewTodo;

})(window);