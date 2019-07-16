let todoList = {
    todoItems: [],
    *[Symbol.iterator]() {
        yield* this.todoItems;
    },
    addItem(description) {
        this.todoItems.push( { description, done: false } );
        return this;
    },
    crossOutItem( index ) {
        if ( index < this.todoItems.length ) {
            this.todoItems[index].done = true;
        }
        return this;
    }
};
 
let iterableTodoList = todoList;
