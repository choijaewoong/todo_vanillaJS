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

    // Export to window
	window.app = window.app || {};
	window.app.Template = Template;    

})(window);