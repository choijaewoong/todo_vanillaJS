model.todos = {
    active: 0,
    completed: 0,
    total: 0,
    todoArr: {}
}
model.todo = function(todo) {
    this.id = todo.id;
    this.title = todo.title;
    this.state = todo.state;
}