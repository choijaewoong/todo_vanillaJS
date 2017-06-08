(function() {
    'use strict';

    function Init() {
        this.template = new app.Template();
        this.storage = new app.StoreTodo();        
        this.todos = new app.Todos(this.storage);
        this.view = new app.ViewTodo(this.template);
        this.ctrl = new app.Controller(this.todos, this.view);
    }
    var init = new Init();

    function loadAll() {
        init.ctrl.loadAll();
    }
    function createTest() {
        init.ctrl.createTestData();
    }
    window.addEventListener("load", loadAll);

})();