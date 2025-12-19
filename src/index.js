document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
    // Add event listener to form
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Get the value
    const taskInput = document.querySelector('input[name="new-task-description"]').value;
    // Build the to-do
    buildToDo(taskInput);
    // To clear input
    event.target.reset();
  });
  
 //Function to build to-do
  function buildToDo(task) {
    const li = document.createElement('li');
    li.textContent = task;
    const taskList = document.getElementById('tasks');
    taskList.appendChild(li);
  }
});
