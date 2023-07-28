"use strict";
const input = document.getElementById("input-box");
const button = document.getElementById("button");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (input.value === '') {
        alert("Field can not be empty!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}
button.addEventListener("click", addTask);
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
listContainer.addEventListener('click', (event) => {
    var _a;
    const target = event.target;
    if (target.tagName === "LI") {
        target.classList.toggle("checked");
    }
    else if (target.tagName === "SPAN") {
        (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    }
    saveData();
});
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTasks() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTasks();
