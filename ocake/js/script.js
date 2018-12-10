$(document).ready(function(){
    setInterval($mobileSlide,3000);
    sub();
});

function $mobileSlide(){
    var slider=$("#mobileSlide").css("margin-left");
    var s=parseFloat(slider);
    if(s>-360){
        $("#mobileSlide").animate({marginLeft:"-=360px"});
    } else {
        $("#mobileSlide").animate({marginLeft:"0"});
    }
}

function sub(){
    $("#gnb>li").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    });
    $("#gnb>li").mouseleave(function(){
        $(this).children(".sub").stop().slideUp();
    });
}