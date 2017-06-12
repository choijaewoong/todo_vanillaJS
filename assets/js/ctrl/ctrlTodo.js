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
        }, title);
    };

    Controller.prototype.createTestData = function() {
        // this.todos.

        // this.todos.todoArr["0"] = new app.Todo({id:"0", title:"exercise", state:"active"});
        // this.todos.todoArr["1"] = new app.Todo({id:"1", title:"work", state:"active"});
        // this.todos.todoArr["2"] = new app.Todo({id:"2", title:"study", state:"completed"});
        // this.saveAll();
    }

    // Export to window
	window.app = window.app || {};
	window.app.Controller = Controller;

})(window);