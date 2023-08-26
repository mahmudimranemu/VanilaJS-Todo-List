let allTask = [];

const inputBtn = document.getElementById("add-task-btn");
const inputEl = document.getElementById("task-input");
const taskEl = document.getElementById("task-list");

const tasks = JSON.parse(localStorage.getItem("allTask"));

if (tasks) {
  allTask = tasks;
  renderTasks();
}

console.log(tasks);

inputBtn.addEventListener("click", (e) => {
  allTask.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("allTask", JSON.stringify(allTask));

  e.preventDefault();
  renderTasks();
});

function renderTasks() {
  let listItems = "";
  for (let i = 0; i < allTask.length; i++) {
    listItems += `<li>
    ${allTask[i]}
    </li>
    `;
  }
  taskEl.innerHTML = listItems;
}
