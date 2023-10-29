import styles from "./Content.module.css";
import Task from "../Task/Task";
import AddSmth from "../AddSmth/AddSmth";
import AddTask from "../AddTask/AddTask";
import { useState } from "react";

const Content = () => {
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);

  const showAddTask = () => setIsAddTaskVisible(true);

  const taskData = [
    { title: "Task 1", isChecked: false },
    { title: "Task 2", isChecked: true },
    { title: "Task 3", isChecked: false },
    { title: "Task 4", isChecked: true },
    { title: "Task 5", isChecked: false },
  ];

  return (
    <div className={styles.container}>
      <AddSmth smth="Task" showAddTask={showAddTask}/>

      <div>
        {taskData.map((task) => (
          <Task
            key={task.title}
            title={task.title}
            isChecked={task.isChecked}
          />
        ))}
      </div>

      <AddTask isVisible={isAddTaskVisible}/>
    </div>
  );
};

export default Content;
