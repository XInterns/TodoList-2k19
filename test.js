let displayTodos = [];

var todoList = [

    { name: 'Wake Up', isCompleted: false }, { name: 'Get Ready for Office', isCompleted: false }, { name: 'Take Metro', isCompleted: false }, { name: 'Get Off Metro', isCompleted: false }, { name: 'Take Shuttle', isCompleted: false }, { name: 'Reach Office', isCompleted: false }];
var x;
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

// input.addEventListener("keypress", function (keyPressed) {
//     if (keyPressed.which === 13) {
//         var li = document.createElement("li");
//         var spanElement = document.createElement("span");
//         var icon = document.createElement("i");

//         var newTodo = this.value;
//         var newtask = { name: newTodo, isCompleted: false };
//         todoList.push(newtask);


//         icon.classList.add('fas', 'fa-circle');
//         spanElement.append(icon);
//         ul.appendChild(li).append(spanElement, newTodo);
//         refreshTodosList(todoList);

//     }

// });





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

// ul.addEventListener('click',removeTasks);

// function removeTasks(e){
    
//         if(e.target.classList.contains('remove')){
//        e.target.parentElement.remove();
       
//         }
   
// }

function removeCompletedTasks(index){
    todoList.splice(index,1);
    refreshTodosList(todoList);
}

// function clearAllCompleted(){

// for (x of todoList) {
//         var activeTaskList = todoList.filter(({ isCompleted }) => isCompleted === true);
// // console.log(activeTaskList)
//     // if(x.isCompleted === true) {
//         todoList.filter( function (el) {
//             return console.log(!activeTaskList.includes(el)) 
//         })
//     // }
// }

    // var i=todoList.length;
         
    // for(y=0;y<todoList.length;y++)
    // { 
    //     if(todoList[y].isCompleted===true)
    //     {
    //         todoList.splice(y,1);
                  
                  
    //               //console.log(i);
    //             //   y++;
    //          }
        
    //          refreshTodosList(todoList);
      
        
    // }
}
//     var activeTaskList = todoList.filter(({ isCompleted }) => isCompleted === false);
//     for(i=0;i<todoList.length;i++){
//         todoList[i]=activeTaskList[i];
//     }
//     refreshTodosList(todoList);

    
// }

// function  clearAllCompleted(){
    
// }




// }x.classList.toggle("fa-check-circle");}
// <i class="fas fa-circle"></i>

// function completeItem() {

//     let item = this.parentNode.parentNode;

//     let parent = item.parentNode;

//     let id = parent.id;




//     let target = (classList === "todo") ? document.getElementsByClassName("completed") : document.getElementsByClassName("todo");

//     parent.removeChild(item);

//     target.insertBefore(item, target.childNodes[0]);
// } 


