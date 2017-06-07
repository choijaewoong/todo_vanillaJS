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
        var view = '';
        var key = "", keys = [];
        
        keys = Object.keys(todoArr);
        for(var i=0; i< keys.length; i++) {
            key = keys[i];
            var template = this.getTodo(todoArr[key]);
            // var template = this.templateTodoItem;
            // var completed = '';
            // var checked = '';
            // if (todoArr[key].isCompleted) {
            //     completed = 'completed';
            //     checked = 'checked';
            // }

			// template = template.replace('{{id}}', todoArr[key].id);
			// template = template.replace('{{title}}', encodeURI(todoArr[key].title));
			// template = template.replace('{{completed}}', completed);
			// template = template.replace('{{checked}}', checked);

            view += template;
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