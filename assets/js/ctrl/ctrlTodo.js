(function (window) {
    'use strict';
    function Controller(todos, view) {
        this.todos = todos;
        this.view = view;
    }

    Controller.prototype.loadAll = function() {
        var key = "", 
            keys = [], 
            todoTableString = "", 
            todoTable = {};
        try {
            if(localStorage["todoTable"]) {
                todoTableString = localStorage["todoTable"];
            }
        } catch(e) {
            alert("Error when reading from Local Storage\n" + e);
        }
        if(todoTableString) {
            todoTable = JSON.parse(todoTableString);     
            keys = Object.keys(todoTable.todoArr);
            console.log(keys.length + "books loaded.");
            for(var i=0; i<keys.length; i++) {
                key = keys[i];
                // this.todos.todoArr[key] = new app.Todo(todoTable.todoArr[key]);
                this.todos.todoArr[key] = todoTable.todoArr[key];
                // model.books[key] = ctrl.book.convertRow2Obj(bookTable[key]);
            }
        }
        this.view.showTodoList(this.todos);
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
