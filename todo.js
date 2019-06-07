var todo = [
    { task: "Eat", isCompleted: true },
    { task: "Sleep", isCompleted:false },
    { task: "Rave", isCompleted:false },
    { task: "Football", isCompleted:false },
    { task: "Repeat", isCompleted: true },];
   
   var data_id = 0;
   
   const createTodoListHTML = ({ task, isCompleted }) => {
    data_id++;
    return `<li data-id=${data_id} class=${isCompleted ? 'completed' : ''}><div class='view'><input class='toggle' type='checkbox' ${isCompleted? 'checked':''}><label>${task}</label><button class="destroy"></button></div></li>`
   }
   
   const refreshTodoList = (todo) => {
    const todosHTML = todo.map((todo) => createTodoListHTML(todo));
    document.getElementById('display-todos').innerHTML = todosHTML.join('');
   }
   const activeCount = (todo) =>   
   {
       var c = 0;
       for(var i=0;i<todo.length;i++)
       {
        if(todo[i].isCompleted === false){
            c++;
        }
       }
       
       document.getElementById('act-disp').innerHTML= c + " "+ "items left";
    
   }

   const getTodos = (showCompleted) => {
    if (showCompleted == undefined) {
      displayTodos = todo;
    }
    else {
      displayTodos = todo.filter(({ isCompleted }) => isCompleted === showCompleted);
    }
    refreshTodoList(displayTodos)
   }

   activeCount(todo);