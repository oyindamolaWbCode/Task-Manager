import React, { useState, useEffect } from "react";
import { GiCancel } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";
import { IconContext } from "react-icons";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTasks = () =>{
//Get task name and due date
    const taskName = document.getElementById("taskName").value;
    const dueDate = document.getElementById("dueDate").value;

    //craete new task

    const newTask = {name: taskName, dueDate};

    //Add new task to the tasks state
    setTasks([...tasks, newTask]);

    // Clear the input fields
    document.getElementById("taskName").value = "";
    document.getElementById("dueDate").value = "";

  }

  //Delete todos
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };


  return (
    <div className="tasks">
      <div className="image-">
        <div className="image-margin">
          <div className="headings">
            <span>Hi!, It's a beautiful day</span>
          </div>
          <div className="AddTask">
            <input type="text" id="taskName" required placeholder="Write a todo" />
            <label>Due Date</label>
            <input type="date" id="dueDate" name="trip-start" />
            <button onClick={addTasks}>Add Todo</button>
          </div>
        </div>
      </div>
      <div className="OutputTodo">
        <ul>
          {/* Map over the tasks and display them */}
          {tasks.map((task, index) => (
            <li key={index}
            className={task.completed ? "completed" : ""}>
              <span>
                <p>{task.name}</p>
              </span>
              <div className="flexy">
                <h6>{task.dueDate}</h6>
                <div className="indicator">
                  <IconContext.Provider value={{ className: "top-react-icons" }}>
                    <span>
                      <GiCancel className="cancel"  onClick={() => deleteTask(index)}/>
                    </span>
                    <span>
                      <GiCheckMark className="complete"/>
                    </span>
                  </IconContext.Provider>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
