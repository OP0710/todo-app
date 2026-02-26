let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Task cannot be empty!");
    return;
  }

  const newTask = {
    text: text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = "";
}
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;

    li.appendChild(span);
    taskList.appendChild(li);
  });
}
if (task.completed) {
  li.classList.add("completed");
}

const completeBtn = document.createElement("button");
completeBtn.textContent = "✔";
completeBtn.onclick = function () {
  toggleComplete(index);
};
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}