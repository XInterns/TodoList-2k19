let displaytodos = [];

const templates = {
    todo: ({ name, completed }, index) => {
        return `<li class="todos">
            <label for="checktodo"></label>
            <i onclick="toggleCheckbox(${index})" class="${completed ? 'far fa-check-circle' : 'far fa-circle'}"></i>
            <input type="checkbox" class="checktodo" name="taskcheck">
            <div class="${completed ? 'todoc' : 'todo'}">
                ${name}
            </div>
        <button class="cross" onclick="removetodos(${index})">X</button>`
    }
}

const renderElements = {
    renderTodoList: (todoList) => {
        const todosHTML = todoList.map((todo, index) => templates.todo(todo, index));
        document.getElementById('tasks').innerHTML = todosHTML.join('');
    },
    renderItemsLeft: (itemsRemaining) => {
        document.getElementById('items-remaining').innerText = `${itemsRemaining} items left`;
    }
}

var todoList = [
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

const removetodos = (index) => {
    // console.log(index);
    todoList.splice(index,1);    
    renderElements.renderTodoList(todoList);
    renderElements.renderItemsLeft(countRemainingTasks(todoList));
}

const toggleCheckbox = (index) => {
     todoList[index].completed = !this.completed;
    // console.log(index);
    // console.dir(todoList[index]);
    renderElements.renderTodoList(todoList);
    renderElements.renderItemsLeft(countRemainingTasks(todoList));
}
// ${todoList}

const addTodo = (event) => {
    todoList.push({name: event.target.value, completed:false});
    renderElements.renderTodoList(todoList);
    renderElements.renderItemsLeft(countRemainingTasks(todoList));
}

const clearAllCompletedtodos = (isCompleted) => {
     displaytodos = filterListOfTodos(isCompleted, todoList);
        todoList = todoList.filter((todo) => {
        return displaytodos.filter((dotodo) => {
           return todo.name == dotodo.name;
        }).length == 0
     });
    //console.dir(todoList);
    // todoList.map((todo, index) => indexOf(displaytodos.includes(todo));
    renderElements.renderTodoList(todoList);
    renderElements.renderItemsLeft(countRemainingTasks(todoList));
}

const filterListOfTodos = (isCompleted, todoList) => todoList.filter(({ completed }) => completed === isCompleted);

const countRemainingTasks = (todoList) => filterListOfTodos(false, todoList).length;