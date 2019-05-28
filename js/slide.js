$('.slide').eq(0).css({ left: 0, opacity:1});
$('.top_title').eq(0).css({ top: 0, opacity:1});
$('.bot_title').eq(0).css({ top: 0, opacity:1});
$('.bot_txt').eq(0).css({ top: 0, opacity:1});
$('.content2_more_btn').eq(0).css({ top: 0, opacity:1});

var time = 1000;
var index = 1;
var slide_length = $('.slide').length;
var top_title = $('.top_title').length;
var bot_title = $('.bot_title').length;
var bot_txt = $('.bot_txt').length;
var content2_more_btn = $('.content2_more_btn').length;
var interval , slideChk = true;

autoslide(3000);

// $(document).on('hover','.cont2_slide_txt','#btnrignt','#btnleft',function(){
//     clearInterval(interval);
//     },function(){
//         autoslide(2000);
// });


$(document).on({
    mouseenter:function(){
        clearInterval(interval);

    },
    mouseleave:function(){
        autoslide(3000);

    }

}, '.cont2_slide_wrap.pt_ver');




$('#btnright').removeClass('click');
$('#btnleft').removeClass('click');

$('#btnright').click(function(){
    if(slideChk){
        btn_init();
        $('#btnright').addClass('click');
        $('#btnleft').removeClass('click');
        
        slideshow(index,'100%',(index-1),'-100%');
        
        index++
    }  
});

$('#btnleft').click(function(){
    if(slideChk){
        btn_init();
        $('#btnright').removeClass('click');
        $('#btnleft').addClass('click');
        index--

        slideshow((index - 1),'-100%',index,'100%');  
    } 
});
//slide function

var coming;
function slideshow(coming,pos1,outing,pos2){
    
        slideChk = false; 
        clearInterval(interval);


        $('.slide').removeClass('slider_active');
        $('.slide').eq(coming % slide_length).css({
            left: pos1, opacity:1
        }).stop().animate({left:0},time).addClass('slider_active');

        $('.top_title').eq(coming % top_title).css({
            top: pos1,opacity:1
        }).stop().animate({top:0},time);

        $('.bot_title').eq(coming % bot_title).css({
            top: pos1,opacity:1
        }).stop().animate({top:0},time);

        $('.bot_txt').eq(coming % bot_txt).css({
            top: pos1,opacity:1
        }).stop().animate({top:0},time);

        $('.content2_more_btn').eq(coming % content2_more_btn).css({
            top: pos1,opacity:1
        }).stop().animate({top:0},time);

        // 보여주기

        $('.slide').eq(outing % slide_length).stop().animate({ 
            left: pos2, opacity:0
        }, time);

        $('.top_title').eq(outing % top_title).stop().animate({ 
            top: pos2, opacity:0
        }, time);
        $('.bot_title').eq(outing % bot_title).stop().animate({ 
            top: pos2, opacity:0
        }, time);
        $('.bot_txt').eq(outing % bot_txt).stop().animate({ 
            top: pos2, opacity:0
        }, time);
        $('.content2_more_btn').eq(outing % content2_more_btn).stop().animate({ 
            top: pos2, opacity:0
        }, time);

        setTimeout(function(){
            slideChk = true; 
           // console.log(slideChk + "@")
        }, time);

//        console.log(slideChk)
  

    // 내보내기
    
}

//버튼함수
function btn_init(){
    $('.slide_btn').attr('disabled',true);
    setTimeout(function(){
        $('.slide_btn').attr('disabled',false);        
    }, time);
}



// 자동으로 돌리기
function autoslide(timer){
    interval = setInterval(function(){
      $('#btnright').trigger('click');
  
    }, timer);
  }
