$(document).ready(function(){
    setInterval(slide,3000);
    gallery();
    popUp();
    sub();
//    setInterval(slideslide,3000);
})
function slide(){
    var slider=$("#slide").css("margin-left");
    var s=parseInt(slider);
//    console.log(s);
    
    if(s>-768){
        $("#slide").animate({marginLeft:"-=192px"});
    } else {
        $("#slide").animate({marginLeft:"0"});
    }
}
function gallery(){
    var imgs=[
        "images/gallBig1.jpg",
        "images/gallBig2.jpg",
        "images/gallBig3.jpg",
        "images/gallBig4.jpg"
    ]
    $("#smallThumb li:nth-of-type(1)").click(function(){
        $("#bigThumb img").attr("src",imgs[0]);
    })
    $("#smallThumb li:nth-of-type(2)").click(function(){
        $("#bigThumb img").attr("src",imgs[1]);
    })
    $("#smallThumb li:nth-of-type(3)").click(function(){
        $("#bigThumb img").attr("src",imgs[2]);
    })
    $("#smallThumb li:nth-of-type(4)").click(function(){
        $("#bigThumb img").attr("src",imgs[3]);
    })
}
function popUp(){
    $("#report ul li:first").click(function(){
        $("#popup").show();
        $(".popup1").show();
        $(".popup2").hide();
    })
    
    $("#report ul li:last").click(function(){
        $("#popup").show();
        $(".popup2").show();
        $(".popup1").hide();
    })
    
    $("#popup button").click(function(){
        $("#popup").hide();
    })
}
function sub(){
    $("#gnb>li").mouseover(function(){
        $(this).children(".sub").stop().slideDown("fast");
    });
    $("#gnb>li").mouseleave(function(){
        $(this).children(".sub").stop().slideUp("fast");
    });
}

//function sub(){
//    $("#gnb > li").on({
//        mouseenter:function(){
//            var tg=$(this);
//            var ind=tg.index();
////            console.log(ind);
//            $("#gnb >li").eq(ind).children(".sub").slideDown("fast");
//            
//        },
//        mouseleave:function(){
//            var tg=$(this);
//            var ind=tg.index();
//            $("#gnb > li").eq(ind).children(".sub").slideUp("fast");
//        }
////        click:function(){
////            
////        }
//    });
//}

//function slideslide(){
//    $("#slide").animate({marginLeft:"-=192px"}).animate().end().appendTo("#slide");
//    }