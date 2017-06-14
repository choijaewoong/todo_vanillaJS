(function (window) {
    'use strict';

    function StoreTodo() {}

    StoreTodo.prototype.saveAll = function(callback, title) {
        var todoTable = {};
        try {
            if(localStorage["todoTable"]) {
                todoTable = JSON.parse(localStorage["todoTable"]);
            }
        } catch(e) {
            alert("Error when reading from Local Storage\n" + e);
        }
         if(!todoTable.todoArr) {
            todoTable.todoArr = [];
        }
        todoTable.todoArr.push({id: todoTable.todoArr.length, title: title, isCompleted: false});
        localStorage["todoTable"] = JSON.stringify(todoTable);
        callback.call(this, todoTable.todoArr);
    }

    StoreTodo.prototype.findAll = function(callback) {
        var todoTable = {};
        try {
            if(localStorage["todoTable"]) {
                todoTable = JSON.parse(localStorage["todoTable"]);
            }
        } catch(e) {
            alert("Error when reading from Local Storage\n" + e);
        }
        if(todoTable.todoArr) {
            callback.call(this, todoTable.todoArr);
        }
    }

    StoreTodo.prototype.find = function(callback, query) {
        var todoTableString = "", 
            todoTable = {},
            filteredTable = {};
        try {
            if(localStorage["todoTable"]) {
                todoTableString = localStorage["todoTable"];
            }
        } catch(e) {
            alert("Error when reading from Local Storage\n" + e);
        }
        if(todoTableString) {
            todoTable = JSON.parse(todoTableString);
            // var todoArr = Object.values(todoTable);
            filteredTable = todoTable.todoArr;
            filteredTable["4"] = {id: "4", title: "sample"};
            // var keys = Object.keys(todoTable);
            // filteredTable = todoTable.todoArr.filter(function(todo) {
            //     return todo.id === 0;
            // });
            callback.call(this, filteredTable);
        }
    }

    // Export to window
    window.app = window.app || {};
    window.app.StoreTodo = StoreTodo;

})(window);