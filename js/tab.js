



    $(".cont4_list").hide();
    $(".cont4_list:first").show();
    $('.sns').find('li:first-child').addClass('on');

    $(".sns_btn").click(function(e) {
        e.preventDefault();
     
        var $this = $(this);
        var snsNum = $this.index('.sns_btn');
       
         //console.log(snsNum);
        $this.addClass('on').siblings().removeClass('on');
        $('.cont4_list').eq(snsNum).show().siblings().hide();   
    });





