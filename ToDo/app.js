document.addEventListener("DOMContentLoaded", function() {
  const pushButton = document.querySelector("#push");
  const newTaskInput = document.querySelector("#newtask input");
  const tasksContainer = document.querySelector("#tasks");
  const addTaskButton = document.getElementById("add-task");

  pushButton.onclick = function() {
    const taskName = newTaskInput.value.trim();
    if (taskName.length === 0) {
      alert("Enter a task");
    } else {
      const taskElement = document.createElement("div");
      taskElement.className = "task";
      const completeButton = document.createElement("button");
      completeButton.id = "complete";
      completeButton.textContent = "Completed";
      completeButton.onclick = function() {
        taskElement.classList.toggle("completed");
      };
      const taskNameElement = document.createElement("span");
      taskNameElement.id = "taskname";
      taskNameElement.textContent = taskName;
      taskElement.appendChild(completeButton);
      taskElement.appendChild(taskNameElement);
      tasksContainer.appendChild(taskElement);
    }
    newTaskInput.value = "";
  };

  try {
    addTaskButton.addEventListener("click", function() {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Enter a task";
      tasksContainer.appendChild(input);
    });
    tasksContainer.addEventListener("click", function(event) {
      if (event.target.tagName === "INPUT") {
        event.target.remove();
      }
    });
  } catch (error) {
    console.error("Error: " + error.message);
  }
});
