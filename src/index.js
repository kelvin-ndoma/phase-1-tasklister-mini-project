//document.addEventListener("DOMContentLoaded", ()=>{//
  //console.log("hey")
const todoForm = document.getElementById("create-task-form");
todoForm.addEventListener('submit',handleSubmit)
const taskList = document.getElementById("tasks")
//});
const tasks = [];

function handleSubmit(event){
  event.preventDefault();
  tasks.push(event.target.description.value);
  renderTaskList();
  event.target.reset();
}
function renderTaskList(){
  taskList.innerHTML = '';
  tasks.forEach(renderTask);
}
function renderTask(taskDescription){
  //console.log('submitted')
 // console.log(event.target.description.value);
  
  const task = document.createElement("li")
  task.textContent = taskDescription;
  taskList.append(task);
//add a delete button to remove an event
  const deleteButton = document.createElement("button");
  deleteButton.textContent =  'X';
  deleteButton.addEventListener('click',()=>{
    //console.log('check')
    task.remove();
  });
  task.append(deleteButton);

  
}