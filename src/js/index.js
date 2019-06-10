let displayTodos = [];

const todoList = [

    {
        name: 'task1',

        isCompleted: true
    },

    {
        name: 'task2',

        isCompleted: false
    },

    {
        name: 'task3',

        isCompleted: false
    },

    {
        name: 'task4',

        isCompleted: true
    },

    {

        name: 'task5',

        isCompleted: false

    }

];

const getTodos = (showCompleted) => {

    if (showCompleted == undefined) {
        displayTodos = todoList;

    }
    else {
        displayTodos = todoList.filter(({ isCompleted }) => isCompleted === showCompleted);

    }

    refreshTodosList(displayTodos);

}

const createTodoFromTemplate = ({ name, isCompleted },index) => {
    return `<li class=${isCompleted ? 'completed' : 'todo'}>
    <label for="check-checkbox"><i onclick="checkboxtoggle(this,${index})" class='${isCompleted ? 'far fa-check-circle' : 'fas fa-circle'}'></i></label>
    <input  id="check-checkbox" class="hide" type="checkbox"/>
    <label>${name}</label>
    <button class="remove" onclick="removeCompletedTasks(${index})"></button></li>`;
}


const refreshTodosList = (todoList) => {
    const todosHtml = [];
    for (i = 0; i < todoList.length; i++) {
        todosHtml.push(createTodoFromTemplate(todoList[i], i));

    }
    document.getElementById('todo-list-task').innerHTML = todosHtml.join('');
    displayRemainingTask(todoList);

}



const displayRemainingTask = (todoList) => {
    var count = 0;
    for (i = 0; i < todoList.length; i++) {

        if (!todoList[i].isCompleted) {
            count++;
        }
    }
    document.getElementById("remaining").innerText = count + " item(s) left";
}

var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");


function checkboxtoggle(element,index) {
    if (element.classList == "fas fa-circle") 
    {
        element.classList = "far fa-check-circle";
        
    }
    else {
        element.classList = "fas fa-circle";
        
    }
    toggletodo(todoList,index);
    refreshTodosList(todoList);
}

function toggletodo(todoList,i){
    todoList[i].isCompleted=(todoList[i].isCompleted)?false:true;
}



function removeCompletedTasks(index){
    todoList.splice(index,1);
    refreshTodosList(todoList);
}

function clearAllCompleted(){
    var i=todoList.length;
         
        for(y=0;y<i;i=todoList.length,y++)
        {

             if(todoList[y].isCompleted==true)
             {
                  todoList.splice(y,1);
                  refreshTodosList(todoList);
                  console.log(y);
                  console.log(i);
                //   y++;
             }
        
        
        
      
        
    }}
