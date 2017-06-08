(function (window) {
    'use strict';

    function StoreTodo() {}

    StoreTodo.prototype.findAll = function(callback) {
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
            callback.call(this, todoTable);
        }
    }

    // Export to window
    window.app = window.app || {};
    window.app.StoreTodo = StoreTodo;

})(window);