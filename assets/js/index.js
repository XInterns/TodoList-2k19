var displayList = [];
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

const createtodofromTemplate = (todo) => {
    return `<li> <input id="circlecheck" type="checkbox"/> ${todo.name} </li>`;
}

const refreshList=(todoList) => {
    const todoHTML = todoList.map((todo) => createtodofromTemplate(todo));
    document.getElementById('tasklist').innerHTML=todoHTML.join("");
}


const getList=(displayCompleted) => {
    if (displayCompleted == undefined) {
        displayList = todoList;
    }
    else {
        displayList = todoList.filter(({completed}) => completed ===displayCompleted);
    }
    refreshList(displayList);
}



