document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
});
const taskForm = document.getElementById("create-task-form");
console.log(taskForm);
const descBox = document.getElementById("new-task-description");
console.log(descBox);
const taskContainer = document.getElementById("tasks");
console.log(taskContainer);

taskForm.addEventListener("submit", createNewTask);

function createNewTask(e) {
  e.preventDefault();
  const task = e.target.querySelector("#new-task-description").value;
  renderTask(task);
  reset;
}

function renderTask(e) {
  const li = document.createElement("li");
  li.textContent = `${e} `;
  taskContainer.append(li);
}