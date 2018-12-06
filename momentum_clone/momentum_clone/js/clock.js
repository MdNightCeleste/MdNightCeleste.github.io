const clockCont = document.querySelector(".js_clock"),
    clockTitle = clockCont.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}
// ternary operator(삼항연산자) - 숫자가 10보다 작을때 앞에 0을 붙이는 방식 ex.01
// ${seconds < 10 ? `0${seconds}` : seconds}
// if문과 유사 - seconds가 10보다 작을때(?)는 `0${seconds}` 아닐때(: - else)는 seconds 그대로
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();