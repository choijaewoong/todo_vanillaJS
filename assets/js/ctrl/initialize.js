(function() {
    'use strict';

    function Init() {
        this.template = new app.Template();
        this.todos = new app.Todos();
        this.ctrl = new app.Controller(this.todos, this.view);
        this.view = new app.View(this.template);
    }
    var init = new Init();

    function createTest() {
        init.ctrl.createTestData();
    }

    window.addEventListener("load", createTest);

})();