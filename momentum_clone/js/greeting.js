const nameForm = document.querySelector(".js_nameForm"),
    nameInput = nameForm.querySelector("input"),
    greeting = document.querySelector(".js_greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(name){
    localStorage.setItem(USER_LS, name);
}

function handleSubmit(event){
    event.preventDefault(); //제출버튼을 눌러도 기본동작(새로고침현상) x
    const currentValue = nameInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    nameForm.classList.add(SHOWING_CN);
    nameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    nameForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){ //유저가 없는 경우
        askForName();
    } else { // 유저가 있는 경우
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();
