import { useState } from "react";
import PropTypes from "prop-types";
import { BiRightArrow } from "react-icons/bi";
import styles from "./Task.module.css";

const Task = ({ title, isChecked }) => {
  const [complete, setComplete] = useState(isChecked);

  const handleCheckbox = () => setComplete(!complete);

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        name="done"
        id="isChecked"
        checked={complete}
        onChange={handleCheckbox}
      />
      <p>{title}</p>
      <BiRightArrow size={30} className={styles.arrowIcon} />
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
};

export default Task;
