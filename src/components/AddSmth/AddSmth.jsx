import { IoAdd } from "react-icons/io5";
import PropTypes from "prop-types";
import styles from "./AddSmth.module.css";
import AddTask from "../AddTask/AddTask";
import { useState } from "react";

const AddSmth = ({ smth }) => {
  const [isVisibleAddTask, setIsVisibleAddTask] = useState(false);

  const handleAddSmthClick = () => setIsVisibleAddTask(!isVisibleAddTask);

  return (
    <div className={styles.container} onClick={handleAddSmthClick}>
      <IoAdd size={30} />
      <h3>Add New {smth}</h3>
      {isVisibleAddTask && <AddTask />}
    </div>
  );
};

AddSmth.propTypes = {
  smth: PropTypes.string.isRequired,
};

export default AddSmth;