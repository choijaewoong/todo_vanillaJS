(function (window) {
    'use strict';
    function Controller(todos, view) {
        this.todos = todos;
        this.view = view;
    }

    Controller.prototype.loadAll = function() {
        var ctrl = this;
        ctrl.todos.read(function(data) {              
            ctrl.view.showTodoList(data);
        });
    };

    Controller.prototype.saveAll = function() {
        var todoTableString = "",
        error = false;
        try {
            todoTableString = JSON.stringify(this.todos);
            localStorage["todoTable"] = todoTableString;
        } catch(e) {
            alert("Error when writing to Local Storage\n" + e);
            error = true;
        }
        if(!error) console.log(0 + " books saved");
    };

    Controller.prototype.createTestData = function() {        
        this.todos.todoArr["0"] = new app.Todo({id:"0", title:"exercise", state:"active"});
        this.todos.todoArr["1"] = new app.Todo({id:"1", title:"work", state:"active"});
        this.todos.todoArr["2"] = new app.Todo({id:"2", title:"study", state:"completed"});
        this.saveAll();
    }

    // Export to window
	window.app = window.app || {};
	window.app.Controller = Controller;

})(window);
