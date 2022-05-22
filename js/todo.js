const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const input = document.createElement("input");
    input.className = 'form-check-input me-0';
    input.type = "checkbox";
    input.id = "flexCheckChecked1";
    const li = document.createElement("li");
    li.appendChild(input);
    li.className = 'list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent';
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    span.className = 'lead fw-normal mb-0';
    const button = document.createElement("button");
    button.innerText = "𝗑";
    button.className = 'd-flex flex-row justify-content-end mb-1 list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent';
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(
        (paintToDo)
    );
}