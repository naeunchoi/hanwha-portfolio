$(window).scroll(function(){
    var s_topSub = $(window).scrollTop() + 700;
    var cont1_top = $('.cont1').offset().top ;
    var cont1_botSub = $('.cont1').offset().top + ($('.cont1').height()+700);

    var  bodyChk = $('body').attr('class');

    var s_top =  $(window).scrollTop()+110;
  
    var footerTop= $('#footer').offset().top - 300;
    var footerHeight = $('#footer').height();
//   console.log(s_top + ' ' + footerHeight);
    if(cont1_top <= s_topSub && s_top <= cont1_botSub) {
        $('.cont1_list > li').css({
            transform:'translateY(0)',
            opacity: 1
        });
    }
    else {
        $('.cont1_list > li').css({
            transform:'translateY(60%)',
            opacity: 0
        });
    }

// console.log(footerTop + "푸터탑" +footerHeight +"푸터높이" +s_top+"scroll탑에 헤더높이 더한것");
    // console.log(s_top+"scroll탑에 헤더높이 더한것"+cont1_top+"conttop");\
    function footer(right){
        if(s_top > cont1_top){
            $('.top_btn').css({right:right}); 
            $('.top_btn').fadeIn(); 
    
            if(s_top < footerTop){
               
                $('.top_btn').css({bottom:($('#footer').height()+60) +'px'}); 
            }else{
                $('.top_btn').css({bottom:0}); 
            }
        }else if(s_top < cont1_top){
            $('.top_btn').fadeOut();
        }
    }
    if(bodyChk == "m_ver"){
        footer(0);
    }else{
       footer('55px')
    }
   
});



$('.top_btn').click(function(){
        event.preventDefault();
        $('.top_btn').addClass('on');             
        $('html, body').animate({
            scrollTop: 0
        }, 1000,function(){
            $('.top_btn').removeClass('on') 
        });
    
    });