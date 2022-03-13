const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event) {
    const userName = loginInput.value;
    event.preventDefault();
    console.log(userName);


}


loginForm.addEventListener("submit", onLoginSubmit);