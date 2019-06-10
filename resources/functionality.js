let displaytodos = [];


const templates = {
    todo: ({name, completed}) => {
        return `<li class="${completed ? 'todos' : 'todos'}">
            <input type="checkbox" class="checktodo" name="taskcheck">
            <i class="${completed ? 'far fa-check-circle' : 'fas fa-circle'}"></i>
            <div class="todo">
                ${name}
            </div>
        <button class="cross" id="remove">X</button>`
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
    if(isCompleted == undefined){
        displaytodos = todoList;
    }else{
        displaytodos = filterListOfTodos(isCompleted, todoList);
    }
    renderElements.renderTodoList(displaytodos);
    renderElements.renderItemsLeft(countRemainingTasks(displaytodos));
}

const filterListOfTodos = (isCompleted,todoList) => todoList.filter(({completed}) => completed === isCompleted);

const countRemainingTasks = (todoList) => filterListOfTodos(false,todoList).length;



fetchtodos();