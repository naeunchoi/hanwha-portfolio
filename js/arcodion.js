
	function Accordion3(){ // 한화케미칼 ver 한마디로 응용버전
				
		var $Dl3 = $('.cont3_arcodion');
		var $Dt = $Dl3.find('.arcodion');
		var $Dd = $Dl3.find('.arcodiontxt');

        $Dl3.find('li:first-child').find('.arcodion_title').addClass('on').end().find('.arcodiontxt').css('display','block');
        
		$('.arcodion_title').on({
			click:function(e){
                // console.log('dd');
                e.preventDefault();
                
				var $this = $(this);
				var nextDD =$this.next('.arcodiontxt');
				var nextDDAttr = nextDD.css('display');


				if( nextDDAttr == "none"){
					$this.parents('.cont3_arcodion').find('.arcodiontxt').slideUp();

					$this.parents('.cont3_arcodion').find('.arcodion_title').removeClass('on');

					$this.addClass('on').siblings().removeClass('on');
					
					nextDD.slideDown();
				}
			}
		});
    }
    Accordion3();