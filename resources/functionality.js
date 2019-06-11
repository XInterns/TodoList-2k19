let displaytodos = [];

const templates = {
    todo: ({ name, completed }, index) => {
        return `<li class="${completed ? 'todos' : 'todos'}">
            <input type="checkbox" class="checktodo" name="taskcheck">
            <i class="${completed ? 'far fa-check-circle' : 'far fa-circle'}"></i>
            <div class="todo">
                ${name}
            </div>
        <button class="cross" onclick="removetodo(${index})" id="${index}">X</button>`
    }
}

const renderElements = {
    renderTodoList: (todoList) => {
        const todosHTML = todoList.map((todo) => templates.todo(todo));
        document.getElementById('tasks').innerHTML = todosHTML.join('');
    },
    renderItemsLeft: (itemsRemaining) => {
        document.getElementById('items-remaining').innerText = `${itemsRemaining} items left`;
    }
}

const todoList = [
    {
        name: 'task1',
        completed: true
    },
    {
        name: 'task2',
        completed: false
    },
    {
        name: 'task3',
        completed: false
    },
    {
        name: 'task4',
        completed: false
    },
    {
        name: 'task5',
        completed: false
    },
];

const fetchtodos = (isCompleted) => {
    if (isCompleted == undefined) {
        displaytodos = todoList;
    } else {
        displaytodos = filterListOfTodos(isCompleted, todoList);
    }
    renderElements.renderTodoList(displaytodos);
    renderElements.renderItemsLeft(countRemainingTasks(displaytodos));
}

const removetodo = (index) => {
    //  console.log(index);
    todoList.splice(index,1);
    // let i = 0;
    //     console.log(remove);
    // while(todoList.length){
    //     if(i!==remove){
    //         displaytodos = todoList;
    //     }
    //     i++;
    // }    
    renderElements.renderTodoList(todoList);
    renderElements.renderItemsLeft(countRemainingTasks(todoList));
}

const filterListOfTodos = (isCompleted, todoList) => todoList.filter(({ completed }) => completed === isCompleted);

const countRemainingTasks = (todoList) => filterListOfTodos(false, todoList).length;

fetchtodos();