(function() {
    'use strict';

    function Init() {
        this.template = new app.Template();
        this.todos = new app.Todos();
        this.view = new app.View(this.template);
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