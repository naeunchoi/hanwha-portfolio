$(function(){
    var bodyChk;
    $(window).resize(function(){
        bodyChk = $('body').attr('class');
        if(bodyChk == "m_ver"){
            resetHandler2();
            $('.allmenu').slideUp(500);
            $('.hamberg').removeClass('active');
            $('.left_nav').removeClass('active'); 
            $('.rightnav').removeClass('active'); 
            
        }else{
            resetHandler2();
            $('.m_allmenu').slideUp(500);
            $('#header').removeClass('on');  

        }

    }).resize();
    

    var header = $('#header');
    $(window).scroll(function(){
        var hambergChk = $('.hamberg').hasClass('active');
        var buttonWrapChk = $('.button_wrap').hasClass('close');
        var s_top = $(window).scrollTop();
        if(s_top > 0){
            header.addClass('fixed'),header.css({transition: 'all 2s'});
        }else{
            if( hambergChk|| buttonWrapChk ){ }else{
                header.removeClass('fixed');
           }
        }
    });

    header.on({
        mouseenter:function(){
            header.addClass('fixed'), header.css({transition: 'all 0.2s'});
        },
        mouseleave:function(){
            var hambergChk = $('.hamberg').hasClass('active');
             var buttonWrapChk = $('.button_wrap').hasClass('close');
            var s_top = $(window).scrollTop();
            if(s_top == 0){
                if( hambergChk|| buttonWrapChk ){}else{
                        header.removeClass('fixed'), header.css({transition: 'all 0.2s'});
                }
            }   
        }
    });

    $(document).on('click','.left_nav > li > a, .r_nav, .s_menu_list a',function(event){
        event.preventDefault(); //
    });


    function resetHandler2(){
        $('.dim').fadeOut();
        $('.search_menu').removeClass('active');
        $('.button_wrap').removeClass('close');
    }


    function headerEvent(){

      
        function allmenuHandler(){
            if(bodyChk == "m_ver"){
                $('.m_allmenu').slideToggle(500);
                $('#header').toggleClass('on');  
                $('.dim').fadeToggle(500);
            }else{
                resetHandler2();
                $('.allmenu').slideToggle(500);
                $('.hamberg').toggleClass('active');
                $('.left_nav').toggleClass('active'); 
                $('.rightnav').toggleClass('active'); 
            }
           
        }

        function buttonHandler(){
            $('.search_menu').toggleClass('active');
            $('.button_wrap').toggleClass('close');
            $('.dim').fadeToggle(500);
        }


        function smenuHandler(){
            $(document).on('click','.s_menu_list > li',function(){
              var thisNum = $(this).index()+1;
              var smenuNum = $(this).parents('.s_menu').index()+1;

            if(smenuNum == 1){
                $('.s_menu').removeClass('on after');
                $('.search_menu3').show();
                $('.smenu3_click').css({display:'none'});
                $('.search_menu2').hide();
                $('.smenu2_click').css({display:'none'});
                $('.smenu2_click'+thisNum).css({display:'block'});

            }else if(smenuNum == 2){
                $('.search_menu3').hide();
                $('.smenu3_click').css({display:'none'});
                $('.smenu3_click'+thisNum).css({display:'block'});
            }else if(smenuNum == 3){  
                $('.smenu').addClass('after');   
            }

              $(this).siblings('li').removeClass('after');
              $(this).addClass('after')
                     .parents('.s_menu')
                     .addClass('after')
                     .removeClass('on')
                     .next('.s_menu')
                     .addClass('on')
                     .removeClass('after');
            });

        }
        function smenuReset(){
            $('.s_menu').removeClass('on');
            $('.search_menu3').show();
            $('.smenu3_click').css({display:'none'});
            $('.search_menu2').show();
            $('.smenu2_click').css({display:'none'});
        }


        $(document).on('click','.hamberg' , allmenuHandler);
    
        $(document).on('click','.button_wrap', buttonHandler);
        
        $(document).on('click','.btn_reset', smenuReset);
        smenuHandler();

    }
    headerEvent();

        $(function(){
            function Accordion(){ // 네비게이션 아코디언 메뉴  ver.1  슬라이드 토글을 사용할경우
                var $Dl =	 $('.dl1');  // $Dl =	 $('.dl'); 로 많이 쓰는데 현재 여기선 타입을 나누기 위해 dl1이라고 함
                var $Dt = $Dl.find('.dt');
                 
                $Dt.on({
                    click:function(e){
                        var $this = $(this);
                        $this.toggleClass('on')
                              .siblings()
                              .removeClass('on')
                              .end() // 여기까지는 디자인을 위한 클래스 
                              .next('.dd') // 핵심 어제배운거
                              .slideToggle()  
                              .siblings('.dd') // 어제배운거
                              .slideUp();
                    }
                });

            } Accordion();
        });
    
});
