import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import PropTypes from "prop-types";
import "./task.css";

const Task = ({ title, description, dueDate, isChecked }) => {
  return (
    <div className="container">
      <input type="checkbox" name="done" id="isChecked" checked={isChecked} />
      <p>{title}</p>
      <p>{description}</p>
      <p>{dueDate ? dueDate.toDateString() : "No due date"}</p>
      <MdDeleteOutline size={30}/>
      <AiOutlineEdit size={30}/>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  dueDate: PropTypes.instanceOf(Date),
  isChecked: PropTypes.bool,
};

export default Task;
