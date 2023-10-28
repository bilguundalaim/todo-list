import { useState } from "react";
import PropTypes from "prop-types";
import { BiChevronRight } from "react-icons/bi";
import "./task.css";

const Task = ({ title, isChecked }) => {
  const [complete, setComplete] = useState(isChecked);

  const handleCheckbox = () => setComplete(!complete);

  return (
    <div className="container">
      <input type="checkbox" name="done" id="isChecked" checked={complete} onClick={handleCheckbox}/>
      <p>{title}</p>
      <BiChevronRight size={30} className="arrowIcon"/>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
};

export default Task;
