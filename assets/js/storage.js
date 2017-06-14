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
        var todoTable = {},
            filteredTable = {};
        try {
            if(localStorage["todoTable"]) {
                todoTable = JSON.parse(localStorage["todoTable"]);
            }
        } catch(e) {
            alert("Error when reading from Local Storage\n" + e);
        }
        if(todoTable.todoArr) {
            filteredTable = todoTable.todoArr.filter(isCompleted);
            console.log(filteredTable);
            callback.call(this, filteredTable);
        }
        function isCompleted(todo) {
            return query? todo.isCompleted : !todo.isCompleted;
        }
    }

    // Export to window
    window.app = window.app || {};
    window.app.StoreTodo = StoreTodo;

})(window);