"use strict";
const tasksField = document.querySelector("#tasks-table");
const tasksForm = document.querySelector("#tasks-form");
const taskInput = document.querySelector("#task-input");
let source;
function createTask(text) {
    let isComplete = false;
    const li = document.createElement("li");
    li.classList.add("task", "dropzone");
    li.textContent = text;
    li.setAttribute("draggable", "true");
    const deleteButton = createButton("delete-button", "fa-trash");
    const updateButton = createButton("update-button", "fa-pen-nib");
    const doneButton = createButton("done-button", "fa-check");
    doneButton.addEventListener("click", () => {
        if (!isComplete) {
            li.classList.add("task-complete");
            isComplete = true;
        }
        else {
            li.classList.remove("task-complete");
            isComplete = false;
        }
    });
    deleteButton.addEventListener("click", () => {
        li.remove();
    });
    updateButton.addEventListener("click", () => {
        if (!document.querySelector("#form-update")) {
            updateText(li);
        }
    });
    li.append(doneButton);
    li.append(updateButton);
    li.append(deleteButton);
    tasksField.append(li);
    dragAndDrop(li);
}
function dragAndDrop(li) {
    li.addEventListener("dragstart", dragStart);
    li.addEventListener("dragenter", dragEnter);
    li.addEventListener("dragover", dragOver);
    li.addEventListener("dragleave", dragLeave);
    li.addEventListener("dragend", dragEnd);
    li.addEventListener("drop", drop);
}
function dragStart(e) {
    source = e.target;
    source.classList.add("dragging");
}
function dragEnter(e) {
    e.preventDefault();
    const target = e.target;
    if (target instanceof HTMLLIElement &&
        target.classList.contains("dropzone") &&
        target !== source) {
        target.classList.add("dragover");
    }
}
function dragOver(e) {
    e.preventDefault();
}
function dragLeave(e) {
    const target = e.target;
    if (target.classList.contains("dropzone")) {
        target.classList.remove("dragover");
    }
}
function dragEnd(e) {
    let target = e.target;
    target.classList.remove("dragging");
    source = null;
}
function drop(e) {
    e.preventDefault();
    const target = e.target;
    if (target && target !== source && target.classList.contains("dropzone")) {
        target.classList.remove("dragover");
        if (source && target.parentElement) {
            const bounding = target.getBoundingClientRect();
            const offset = e.clientY - bounding.top;
            if (offset > bounding.height / 2) {
                target.parentElement.insertBefore(source, target.nextSibling);
            }
            else {
                target.parentElement.insertBefore(source, target);
            }
        }
    }
}
function updateText(li) {
    const form = document.createElement("form");
    form.id = "form-update";
    const input = document.createElement("input");
    input.id = "input-update";
    form.appendChild(input);
    li.appendChild(form);
    li.firstChild.textContent = "";
    input.focus();
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let text = input.value;
        if (text !== "") {
            li.firstChild.textContent = input.value;
            li.removeChild(form);
        }
    });
}
function createButton(className, icon) {
    const button = document.createElement("button");
    button.classList.add("button", className);
    const buttonIcon = document.createElement("i");
    buttonIcon.classList.add("fa-solid", icon);
    button.append(buttonIcon);
    return button;
}
tasksForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = taskInput.value;
    if (text !== "") {
        createTask(text);
        taskInput.value = "";
    }
});
