const M_weather = document.querySelector(".js_weather");
const API_KEY = "dfa73bb5fdcb495b57b23cb1ade6dec0";
const COORDS = "coords"; //좌표


function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.sys.country;
            M_weather.innerText = `${temperature}° @ ${place}`;
    }) // then함수는 이전 함수를 모두 불러온 후에 실행됨
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // 객체에 변수의 이름과 객체의 key값의 이름을 같게 저장할때
        longitude // latitude = latitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


function handleGeoError(){
    M_weather.innerText = "Can't access geo location";
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    //위치 정보확인
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();