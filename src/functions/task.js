function setTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTask() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    return tasks;
}

export {
  setTask,
  getTask
}