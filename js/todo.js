const toDoForm = document.getElementById("todo-form");
const toDoInput = document.getElementSelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);