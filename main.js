let addTodoButton = document.getElementById("addTodoBtn");
let listBox = document.getElementById("listBox");
let inputField = document.getElementById("inputField");

const clearInput = () => {
  document.getElementById("inputField").value = "";
};

addTodoButton.addEventListener("click", function () {
  const todoItemContainer = document.createElement("div");
  todoItemContainer.classList.add("todoItemContainer");

  const paragraph = document.createElement("p");
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttonsContainer");

  const crossOverBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  paragraph.innerText = inputField.value;
  crossOverBtn.innerText = "✔";
  deleteBtn.innerText = "-";

  if (inputField.value === "") {
    alert("You need to write something before adding to the list!");
  } else {
    buttonsContainer.appendChild(crossOverBtn);
    buttonsContainer.appendChild(deleteBtn);

    todoItemContainer.appendChild(paragraph);
    todoItemContainer.appendChild(buttonsContainer);
    listBox.appendChild(todoItemContainer);
  }

  clearInput();

  crossOverBtn.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
    paragraph.style.color = "#deae70";
     });
    crossOverBtn.addEventListener("dblclick", function () {
      paragraph.style.textDecoration = "none";
      paragraph.style.color = "#000000";
   
  });
  deleteBtn.addEventListener("click", function () {
    todoItemContainer.removeChild(paragraph);
    buttonsContainer.removeChild(crossOverBtn);
    buttonsContainer.removeChild(deleteBtn);
  });
});
