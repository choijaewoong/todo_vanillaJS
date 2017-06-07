(function (window) {
	'use strict';
    function View() {
    
    }

    View.prototype.init = function() {
        var $todoList = document.querySelector('.todo-list');
        var keys = [], key = '';
        // ctrl.todo.loadAll();
        keys = Object.keys(model.todos.todoArr);
        for(var i = 0; i<keys.length; i++) {
            key = keys[i];
            var listItem = document.createElement('li')
        }
    }

    // Export to window
	window.app = window.app || {};
	window.app.View = View;


})(window);