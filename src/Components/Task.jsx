import React, { useState, useEffect } from "react";
import { GiCancel } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";
import { IconContext } from "react-icons";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTasks = () =>{
//Get task name and due date
    const taskName = document.getElementById("taskName").value.trim();
    const dueDate = document.getElementById("dueDate").value;

    if (!taskName) {
      alert("Please enter a task name.");
      return; // Don't proceed if the task name is empty
    }

     // Check if a valid date is entered
  if (!dueDate) {
    alert("Please enter a valid due date.");
    return; // Don't proceed if the date is empty
  }

    //craete new task

    const newTask = { name: taskName, dueDate, completed: false };

    //Add new task to the tasks state
    setTasks([...tasks, newTask]);

    // Clear the input fields onsubmit
    document.getElementById("taskName").value = "";
    document.getElementById("dueDate").value = "";

  }

  //Delete todos
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    // Load tasks from localStorage when the component mounts
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever the tasks state changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  return (
    <div className="tasks">
      <div className="image-">
        <div className="image-margin">
          <div className="headings">
            <span>Hi!, It's a beautiful day</span>
          </div>
          <div className="AddTask">
            <form>
            <input type="text" id="taskName" placeholder="Write a todo" required />
            <label>Due Date</label>
            <input type="date" id="dueDate" name="trip-start" required />
            <button onClick={addTasks}>Add Todo</button>
  </form>
          </div>
        </div>
      </div>
      <div className="OutputTodo">
        <ul>
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
