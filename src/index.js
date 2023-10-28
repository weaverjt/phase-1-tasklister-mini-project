document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.getElementById('submit');
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    //grab elements
    let newTaskDes = document.getElementById("new-task-description").value;
    console.log(newTaskDes);
    let tasks = document.getElementById('tasks');
    
    // create new li and set value to text contents of newTaskDes
    newTask = tasks.appendChild(document.createElement("li"));
    newTask.textContent = newTaskDes;
   
    
    
  })



});
