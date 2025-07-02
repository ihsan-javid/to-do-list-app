const form = document.querySelector("form");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add a task
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    createTaskElement(taskText);
    taskInput.value = "";
  }
});

// Create a task element
function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.innerText = taskText;
  li.classList.add("task");
  taskList.appendChild(li);

  // Toggle completion
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Right-click to delete
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });
  //   Double-click to delete
  li.addEventListener("dblclick", (e) => {
    e.preventDefault();
    li.remove();
  });
}
