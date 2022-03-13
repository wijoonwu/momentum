const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    const userName = loginInput.value;
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function hide(content) {
    content.classList.add(HIDDEN_CLASSNAME);
}

function show(content) {
    content.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}!`;
    show(greeting);
    hide(loginForm);
    show(logoutForm);
    logoutForm.addEventListener("submit", onLogOutSubmit);
}

function onLogOutSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    hide(greeting);
    hide(logoutForm);
    show(loginForm);
    loginInput.value = null;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    show(loginForm);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);;
}