var todo_array = [
    { task: "Eat", isCompleted: true },
    { task: "Sleep", isCompleted:false },
    { task: "Rave", isCompleted:false },
    { task: "Football", isCompleted:false },
    { task: "Repeat", isCompleted: true },];
   
   var data_id = 0;
   
   const createTodoListHTML = ({ task, isCompleted }) => {
    data_id++;
    return `<li data-id=${data_id} class=${isCompleted ? 'completed' : ''}><div class='view'><input class='toggle' type='checkbox' checked=''><label>${task}</label><button class="destroy"></button></div></li>`
   }
   
   const refreshTodoList = (todo_array) => {
    const todosHTML = todo_array.map((todo) => createTodoListHTML(todo));
    document.getElementById('display-todos').innerHTML = todosHTML.join('');
   }

   const getTodos = (showCompleted) => {
    if (showCompleted == undefined) {
      displayTodos = todo_array;
    }
    else {
      displayTodos = todo_array.filter(({ isCompleted }) => isCompleted === showCompleted);
    }
    refreshTodoList(displayTodos)
   }






