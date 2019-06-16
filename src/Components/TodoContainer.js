import React,{Component} from 'react';
import EnterTask from './Components/EnterTask' ;

class TodoListContainer extends Component{

    render(){
        return (
            <div class="todo-container">
                <EnterTask />
            </div>     
    )
}
}
export default TodoListContainer;