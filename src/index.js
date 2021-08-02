document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const task = document.getElementById("list");
  const taskFrom = document.getElementById("create-task-form");
  
  function handleSubmit(e){
    event.preventDefault();
    const input = document.getElementById("new-task-description");
    const li = document.createElement('li');
   
    li.innerText = e.target[0].value;
    list.appendChild(li);
  }

  taskFrom.addEventListener('submit', handleSubmit);
});
