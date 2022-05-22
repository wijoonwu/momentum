const clock = document.querySelector("h1#clock");

function getClock() {
    const date = new Date().toLocaleTimeString();
    clock.innerText = date;
    //    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds(2)}`;
}

getClock();
setInterval(getClock, 1000);