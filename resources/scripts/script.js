const taskInput = document.querySelector('.new-todo');
const taskList = document.querySelector('#display-todos');

const todo_map=new Map();
var id_val=0;

const addTask=(event)=>{
  id_val++;
  const task_obj={task:event.target.value,isCompleted:false};
  
  todo_map.set(id_val,task_obj);

  taskList.appendChild(createTodoListHTML(id_val,task_obj));
  
  taskInput.value='';

  displayActiveQuant(todo_map);
  event.preventDefault;
}

//checkbox toggle management function
const markCompleted =(event) =>{
  const check=event.target.parentElement.parentElement;
  if(check.className=="completed"){
    //cross checking the display option selected
    if(event.srcElement.baseURI.substring(34)==='completed'){   
      event.target.parentElement.parentElement.remove();
    }
    event.target.parentElement.parentElement.className='';
    todo_map.get(parseInt(check.id,10)).isCompleted=false;
    displayActiveQuant(todo_map);    
  }
  else{
    if(event.srcElement.baseURI.substring(34)==='active'){
      event.target.parentElement.parentElement.remove();
    }
    event.target.parentElement.parentElement.className='completed';
    todo_map.get(parseInt(check.id)).isCompleted=true;
    displayActiveQuant(todo_map);
  }
}

//active tasks count display
const displayActiveQuant =(todo_map) =>{
  var quant=0;
  todo_map.forEach((values) => {if(!values.isCompleted){quant++;}
  });
  document.getElementById('display-active').innerHTML=`<strong>${quant}</strong> items left`;
}

const createTodoListHTML = (id_val,{task,isCompleted}) => {
  const li_element=document.createElement('li');
  li_element.className=isCompleted? 'completed':'';
  li_element.id=id_val;

  const div_element=document.createElement('div');
  div_element.className='view';
  div_element.innerHTML=`<input onclick=markCompleted(event) class='toggle' type='checkbox' ${isCompleted ? 'checked' : ''}><label>${task}</label><button onclick=removeTasks(event) class="destroy"></button>`

  li_element.appendChild(div_element);

  return li_element;
}

const refreshTodoList = (todo_array) => {
  const todosHTML = todo_array.map(([first,second]) => createTodoListHTML(first,second));
  console.log(todosHTML);

  //flushing out older childs
  var myNode = document.getElementById("display-todos");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  
  todosHTML.forEach((task)=>{document.getElementById('display-todos').appendChild(task)}); 
}

const getTodos = (showCompleted,event) => {
  const todo_array= Array.from(todo_map.entries());
  //sets box around selected diplay option
  setBox(event.target.id);
  if (showCompleted === null) {
    displayTodos = todo_array;
  }
  else {
    displayTodos = todo_array.filter(([first,{ isCompleted }]) => isCompleted === showCompleted);
  }

  refreshTodoList(displayTodos);
  displayActiveQuant(todo_map);
}

const removeTasks=(event)=>{
  //single delete
  if(event.target.className==='destroy'){
    const remove_id=event.target.parentElement.parentElement.id;
    document.getElementById(remove_id).remove();
    todo_map.delete(parseInt(remove_id));
    displayActiveQuant(todo_map);
  }
  else{
    todo_map.forEach(({isCompleted},key)=>{
      if(isCompleted){
        document.getElementById(key).remove();
        todo_map.delete(key);
      }});
  }
}

const setBox = (id)=>{
  switch(id){
    case 'disp-all':
      document.getElementById('disp-all').className='selected';
      document.getElementById('disp-active').className='';
      document.getElementById('disp-complete').className='';
      break;
    case 'disp-active':
      document.getElementById('disp-active').className='selected';
      document.getElementById('disp-all').className='';
      document.getElementById('disp-complete').className='';
      break;
    case 'disp-complete':
      document.getElementById('disp-complete').className='selected';
      document.getElementById('disp-all').className='';
      document.getElementById('disp-active').className='';
      break;
  }
}