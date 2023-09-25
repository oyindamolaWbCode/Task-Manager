import {GiCancel} from 'react-icons/gi';
import {GiCheckMark} from 'react-icons/gi';

const TaskManager = () =>{
    return(
        <div className="tasks">
            <div className="headings">
                <span>Hi!, It's a beautiful day</span>
                <span>Add Todo</span>
                <span>Have a good one</span>
            </div>
            <div className="AddTask">
                <input type="text" required placeholder="Add Todo"/>
                <label>Due Date</label>
                <input type="date" id="start" name="trip-start"  />
                <button>Add Todo</button>
            </div>
            <div className="OutputTodo">
                <p>Structure the business plan project to perfection</p>
                <input type="date" id="start" name="trip-start"  />
                <div className="indicator">
                    <span><GiCancel /></span>
                    <span><GiCheckMark /></span>
                </div>
            </div>
        </div>
    )
}

export default TaskManager;