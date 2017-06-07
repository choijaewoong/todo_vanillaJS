ctrl.todo = {
    saveAll : function() {
        var todoTableString = "",
            error = false;
            // model.todos.total = Object.values(model.todos);
        try {
            todoTableString = JSON.stringify(model.todos);
            localStorage["todoTable"] = todoTableString;
        } catch(e) {
            alert("Error when writing to Local Storage\n" + e);
            error = true;
        }
        if(!error) console.log(0 + " books saved");
    },
    createTestData : function() {
        model.todos.todoArr["0"] = new model.todo({id:"0", title:"exercise", state:"active"});
        model.todos.todoArr["1"] = new model.todo({id:"1", title:"work", state:"active"});
        model.todos.todoArr["2"] = new model.todo({id:"2", title:"study", state:"completed"});
        ctrl.todo.saveAll();
    }
}