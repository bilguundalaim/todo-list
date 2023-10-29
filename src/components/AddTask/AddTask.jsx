import styles from "./AddTask.module.css";
import { setTask } from "../../functions/task";
import { useState } from "react";
import PropTypes from "prop-types"

const AddTask = ({ isVisible }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    list: "Personal",
    dueDate: "",
  });

  const handleAddButton = () => {
    console.log(newTask);
    setTask(newTask);

  };

  const handleTitleChange = (e) => {
    setNewTask({
      ...newTask,
      title: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setNewTask({
      ...newTask,
      description: e.target.value,
    });
  };

  const handleListChange = (e) => {
    setNewTask({
      ...newTask,
      list: e.target.value,
    });
  };

  const handleDueDateChange = (e) => {
    setNewTask({
      ...newTask,
      dueDate: e.target.value,
    });
  };

  return (
    <div
      className={styles.container}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <h1>Task:</h1>

      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={handleDescriptionChange}
      />

      <div>
        <label htmlFor="lists">List</label>
        <select
          name="lists"
          id="lists"
          value={newTask.list}
          onChange={handleListChange}
        >
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="school">School</option>
        </select>
      </div>

      <div>
        <label htmlFor="datePicker">Due Date</label>
        <input
          type="date"
          name="datePicker"
          id="datePicker"
          value={newTask.dueDate}
          onChange={handleDueDateChange}
        />
      </div>

      <div>
        <button>Delete Task</button>
        <button onClick={handleAddButton}>Save Changes</button>
      </div>
    </div>
  );
};

AddTask.propTypes = {
  isVisible: PropTypes.bool,
}

export default AddTask;
