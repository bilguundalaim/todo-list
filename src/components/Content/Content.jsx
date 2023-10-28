import styles from "./Content.module.css";
// import Task from "../Task/Task";
import AddSmth from "../AddSmth/AddSmth";

const Content = () => {
  return(
    <div className={styles.container}>
      <AddSmth smth={"Task"}/>
    </div>
  );
};

export default Content;