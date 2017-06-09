(function (window) {
    'use strict';

    function StoreTodo() {}

    StoreTodo.prototype.saveAll = function(callback, todoArr) {
        console.log("test");
    }
    StoreTodo.prototype.findAll = function(callback) {
        var todoTableString = "", 
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