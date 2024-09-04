/* const draggable = document.querySelector(".draggable") as HTMLDivElement;
const dropzone = document.querySelector(".dropzone") as HTMLDivElement;

let source = null;

draggable.addEventListener("dragstart", (e) => {
  source = e.target as HTMLElement;
});

dropzone.addEventListener("dragenter", () => {
  dropzone.style.backgroundColor = "green";
});

dropzone.addEventListener("dragleave", () => {
  dropzone.style.backgroundColor = "blue";
});

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.style.backgroundColor = "blue";

  if (
    e.target instanceof HTMLElement &&
    e.target.classList.contains("dropzone")
  ) {
    e.target.appendChild(source!);
  }
}); */
