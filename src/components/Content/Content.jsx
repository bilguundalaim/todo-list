import Task from "../Task/Task"
import AddSmth from "../AddSmth/AddSmth"

const Content = () => {
  return (
    <div>
      <AddSmth smth="Task"/>
      <Task title="Hiii" isChecked={true}/>
    </div>
  )
}

export default Content