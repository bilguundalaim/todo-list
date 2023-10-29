import styles from "./Content.module.css";
// import Task from "../Task/Task";
// import AddSmth from "../AddSmth/AddSmth";
import AddTask from "../AddTask/AddTask";

const Content = () => {
  return(
    <div className={styles.container}>
      <AddTask />
    </div>
  );
};

export default Content;