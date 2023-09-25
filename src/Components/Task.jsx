import { GiCancel } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";
import { IconContext } from "react-icons";

const TaskManager = () => {
  return (
    <div className="tasks">
      <div className="image-">
        <div className="image-margin">
          <div className="headings">
            <span>Hi!, It's a beautiful day</span>
          </div>
          <div className="AddTask">
            <input type="text" required placeholder="Write a todo" />
            <label>Due Date</label>
            <input type="date" id="start" name="trip-start" />
            <button>Add Todo</button>
          </div>
        </div>
      </div>
      <div className="OutputTodo">
        <ul>
          <li>
            <span>
              <p>Structure the business plan project to perfection</p>
                  </span>
              <div className="flexy">
              <h6>9/25/2023</h6>
            <div className="indicator">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <span>
                  <GiCancel className="cancel" />
                </span>
                <span>
                  <GiCheckMark className="complete" />
                </span>
              </IconContext.Provider>
            </div>
            </div>
          </li>
          <li>
            <span>
              <p>Structure the business plan project to perfection</p>
                  </span>
              <div className="flexy">
              <h6>9/25/2023</h6>
            <div className="indicator">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <span>
                  <GiCancel className="cancel" />
                </span>
                <span>
                  <GiCheckMark className="complete" />
                </span>
              </IconContext.Provider>
            </div>
            </div>
          </li>
          <li>
            <span>
              <p>Structure the business plan project to perfection</p>
                  </span>
              <div className="flexy">
              <h6>9/25/2023</h6>
            <div className="indicator">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <span>
                  <GiCancel className="cancel" />
                </span>
                <span>
                  <GiCheckMark className="complete" />
                </span>
              </IconContext.Provider>
            </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
