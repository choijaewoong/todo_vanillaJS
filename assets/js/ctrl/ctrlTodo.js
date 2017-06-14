(function (window) {
    'use strict';
    function Controller(todos, view) {
        var ctrl = this;
        this.todos = todos;
        this.view = view;
        this.view.bindAddTodoEvent(function(title) {
            ctrl.addItem(title);
        });
    }

    Controller.prototype.loadAll = function() {
        var ctrl = this;
        ctrl.todos.read(function(data) {
            ctrl.view.showTodoList(data);
        });
    };

    Controller.prototype.loadActive = function() {
        var ctrl = this;
        ctrl.todos.read(function(data) {
            ctrl.view.showTodoList(data);
        }, false);
    };

    Controller.prototype.loadCompleted = function() {
        var ctrl = this;
        ctrl.todos.read(function(data) {
            ctrl.view.showTodoList(data);
        }, true);
    };

    Controller.prototype.addItem = function(title) {
        var ctrl = this;
        ctrl.todos.create(function(data) {
            ctrl.view.showTodoList(data);
            ctrl.view.clearNewTodo();
        }, title);
    };

    // Export to window
	window.app = window.app || {};
	window.app.Controller = Controller;

})(window);