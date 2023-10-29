import styles from "./AddTask.module.css";

const AddTask = () => {
  return (
    <div className={styles.container}>
      <h1>Task</h1>
      <input type="text" />
      <input type="text" />
      <label htmlFor="">List</label>
      <select name="" id=""></select>
      <label htmlFor="">Due Date</label>
      <input type="date" name="" id="" />
      <button>Delete Task</button>
      <button>Save Changes</button>
    </div>
  )
}

export default AddTask