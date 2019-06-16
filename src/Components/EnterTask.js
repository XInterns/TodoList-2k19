import React,{Component} from 'react';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class EnterTask extends Component{
    render(){
        return (
            <div class="new-task">
                <FontAwesomeIcon class="chevrondown" icon={faChevronDown} />
               
                <input id="enter-task" class="enter-new-task" onchange='addEvents(event)' type="text" placeholder="What needs to be done?" />
             </div>
    )
}
}
export default EnterTask;