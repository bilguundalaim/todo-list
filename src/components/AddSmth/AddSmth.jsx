import { IoAdd } from "react-icons/io5";
import PropTypes from "prop-types";
import styles from "./AddSmth.module.css";

const AddSmth = ({ smth, showAddTask }) => {
  return (
    <div className={styles.container} onClick={showAddTask}>
      <IoAdd size={30} />
      <h3>Add New {smth}</h3>
    </div>
  );
};

AddSmth.propTypes = {
  smth: PropTypes.string.isRequired,
  showAddTask: PropTypes.func.isRequired,
};

export default AddSmth;
