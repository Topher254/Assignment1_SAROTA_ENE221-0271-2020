// Name: SAROTA ONDIEKI RAPHAEL
// RegNo: ENE221-0271/2020

document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit");
    const newTask = document.getElementById("task");
  
    submit.disabled = true;
  
    newTask.addEventListener("input", () => {
      submit.disabled = false;
    });
  
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault(); 

      const taskEntered = newTask.value;
      if (taskEntered === "") return;
  
      const singleTaskItem = document.createElement("li");
      singleTaskItem.textContent = taskEntered;
  
      const taskList = document.getElementById("tasks");
      taskList.append(singleTaskItem);
//   clearing inputs
      newTask.value = "";
      submit.disabled = true;
  
      return false; 
    });
  });
  