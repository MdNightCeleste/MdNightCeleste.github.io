const toDoForm = document.querySelector(".js_toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODO_LS = "toDo"
let toDoArray = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDoArray.filter(function(toDo){
        return toDo.id !== parseInt(li.id); // string to Num
    });// filter - 체크가 된 아이템들의 array를 준다
    toDoArray = cleanToDo; //삭제된 리스트를 저장
    saveToDo();
}

function saveToDo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDoArray));
    //storage에 저장된 object타입을 string타입으로 바꿔야함
}

function paintToDo(Text){
    const list = document.createElement("li");
    // const delBtn = document.createElement("button"); 버튼을 만들경우
    const span = document.createElement("span");
    const newID = toDoArray.length + 1; //1번째 배열을 1로 만들기 위함
    // delBtn.innerText = "X"; //체크와 함께 연한 회색으로 del
    span.addEventListener("click", deleteToDo);
    span.innerText = Text;
    // list.appendChild(delBtn);
    list.appendChild(span); //span을 li에 넣음
    list.id = newID;
    toDoList.appendChild(list); //li를 ul에 넣음
    const toDoObj = {
        text: Text,
        id: newID 
    }
    toDoArray.push(toDoObj);
    saveToDo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //submit후 input빈칸 만들기
}

function loadToDo(){
    const loadedToDo = localStorage.getItem(TODO_LS);
    if(loadedToDo !== null){
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function(toDo) {
            paintToDo(toDo.text);
        })
    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();