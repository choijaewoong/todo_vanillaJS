(function (window) {
    'use strict';
    function Template() {
        this.templateTodoItem = '<li data-id="{{id}}" class="{{completed}}">\
                                    <div class="view">\
                                        <input class="toggle" type="checkbox" {{checked}}>\
                                        <label>{{title}}</label>\
                                        <button class="destroy"></button>\
                                    </div>\
                                </li>';
    }

    Template.prototype.getAllTodos = function(todoArr) {
        console.log("template");
        var view = '';
        if(todoArr) {
            console.log(todoArr.length);
            for (var i=0; i<todoArr.length; i++) {
                var template = this.getTodo(todoArr[i]);
                view += template;
            }
        }
        return view;
    }

    Template.prototype.getTodo = function(todo) {
        var completed = '';
        var checked = '';
        if (todo.isCompleted) {
            completed = 'completed';
            checked = 'checked';
        }
        return '<li data-id="' + todo.id + '" class="' + todo.completed + '">\
                    <div class="view">\
                        <input class="toggle" type="checkbox" ' + checked + '>\
                        <label>' + todo.title + '</label>\
                        <button class="destroy"></button>\
                    </div>\
                </li>';
    }

    // Export to window
	window.app = window.app || {};
	window.app.Template = Template;

})(window);