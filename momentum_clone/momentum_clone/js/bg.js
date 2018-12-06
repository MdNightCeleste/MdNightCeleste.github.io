const body = document.querySelector("body");
const IMG_NUMBER = 5;

function paintImg(imgNum){
    const image = new Image();
    image.src = `images/${imgNum + 1}.jpg`; //Math.random이 0을 주지 않도록 +1
    image.classList.add("bgImg");
    body.appendChild(image);
    // image.addEventListener("loaded", handleImgLoad);
    // API에서 이미지를 얻을 경우에 사용
}
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNum = genRandom();
    paintImg(randomNum);
}

init();