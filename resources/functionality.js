const displaytodos = []

const todoList = [
    {
        name: 'task1',
        completed: false
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
    if(showCompleted == undefined){
        displaytodos = todoList;
    }
    else if(showCompleted===todoList.filter({completed})){
        displaytodos = todoList;
    }
    else{
        displaytodos = todoList;
    }    
}