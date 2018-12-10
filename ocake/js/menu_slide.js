var $slideContent; //애니메이션 대상
var slideLength; //
var slideWidth;
var currentIndex=0;
var $bannerNav; //동그라미 메뉴

$(document).ready(function(){
    init(); //환경설정 초기화 함수 실행
    menuSlide(); //슬라이드 기능을 실행
});

function init(){ //initialize 초기화
            $slideContent=$("#menuSlide");
            slideLength=$("#menuSlide").children("div").length;
            slideWidth=756;
//            slideWidth=$(".menuSlideDiv").css("width");//배너의 가로폭
//    console.log(slideWidth);
            $bannerNav=$("#bannerNav ul li a");
            bannerNavDot(0); // 0번 도트를 활성화
        }
function menuSlide(){
        $bannerNav.click(function(){
            var nextIndex=$bannerNav.index(this);
                changeBannerSlide(nextIndex);
        });
        $("#prev").click(function(){
            prev();
        });

        $("#next").click(function(){ // 다음 버튼 
            next();
        });
    }
function prev(){
        var nextIndex=currentIndex-1;
        if(nextIndex<0) nextIndex=slideLength-1//사진 목록의 끝번 인덱스
        changeBannerSlide(nextIndex);
    }
    function next(){
        var nextIndex=currentIndex+1;
        if(nextIndex>slideLength-1) nextIndex=0//사진 목록의 끝번 인덱스
        changeBannerSlide(nextIndex);
    }
    function changeBannerSlide(nextIndex){
        bannerNavDot(nextIndex);
        var posX=-slideWidth*nextIndex; // 이동할 좌표(폭*인덱스번호)
                $slideContent.stop().animate({ //이전 누르면 움직이는 도중에도
                    marginLeft:posX // 멈춤과 함께 즉시 다음 인덱스 번호로 이동
                },400,"linear"); //0.4초 만에 부드럽게 애니메이트
        currentIndex=nextIndex; //마지막 사진의 인덱스번호로 변경,대입
    }
function bannerNavDot(nextIndex){
            $bannerNav.eq(currentIndex).removeClass("current");
            $bannerNav.eq(nextIndex).addClass("current");
        }