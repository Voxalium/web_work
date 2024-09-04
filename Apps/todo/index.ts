const tasksField = document.querySelector("#tasks-table") as HTMLUListElement;
const tasksForm = document.querySelector("#tasks-form") as HTMLFormElement;
const taskInput = document.querySelector("#task-input") as HTMLInputElement;

let source: HTMLLIElement | null;

function createTask(text: string) {
  let isComplete = false;

  const li = document.createElement("li") as HTMLLIElement;
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
    } else {
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

function dragAndDrop(li: HTMLLIElement) {
  li.addEventListener("dragstart", dragStart);
  li.addEventListener("dragenter", dragEnter);
  li.addEventListener("dragover", dragOver);
  li.addEventListener("dragleave", dragLeave);
  li.addEventListener("dragend", dragEnd);
  li.addEventListener("drop", drop);
}

function dragStart(e: DragEvent) {
  source = e.target as HTMLLIElement;
  source.classList.add("dragging");
}

function dragEnter(e: DragEvent) {
  e.preventDefault();
  const target = e.target as HTMLLIElement;
  if (
    target instanceof HTMLLIElement &&
    target.classList.contains("dropzone") &&
    target !== source
  ) {
    target.classList.add("dragover");
  }
}

function dragOver(e: DragEvent) {
  e.preventDefault();
}

function dragLeave(e: DragEvent) {
  const target = e.target as HTMLLIElement;
  if (target.classList.contains("dropzone")) {
    target.classList.remove("dragover");
  }
}

function dragEnd(e: DragEvent) {
  let target = e.target as HTMLLIElement;
  target.classList.remove("dragging");
  source = null;
}

function drop(e: DragEvent) {
  e.preventDefault();
  const target = e.target as HTMLLIElement;
  if (target && target !== source && target.classList.contains("dropzone")) {
    target.classList.remove("dragover");
    if (source && target.parentElement) {
      const bounding = target.getBoundingClientRect();
      const offset = e.clientY - bounding.top;
      if (offset > bounding.height / 2) {
        target.parentElement.insertBefore(source, target.nextSibling);
      } else {
        target.parentElement.insertBefore(source, target);
      }
    }
  }
}

function updateText(li: HTMLLIElement) {
  const form = document.createElement("form") as HTMLFormElement;
  form.id = "form-update";
  const input = document.createElement("input") as HTMLInputElement;
  input.id = "input-update";

  form.appendChild(input);
  li.appendChild(form);

  li.firstChild!.textContent = "";
  input.focus();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let text = input.value;
    if (text !== "") {
      li.firstChild!.textContent = input.value;
      li.removeChild(form);
    }
  });
}
function createButton(className: string, icon: string): HTMLButtonElement {
  const button = document.createElement("button") as HTMLButtonElement;
  button.classList.add("button", className);
  const buttonIcon = document.createElement("i") as HTMLElement;
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
