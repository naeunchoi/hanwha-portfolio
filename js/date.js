var dt = new Date();
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;
        var date = dt.getDate();
        var day = dt.getDay();
        var hour = dt.getHours();
        var min = dt.getMinutes();
        var sec = dt.getSeconds();

        var ampm = "am";
        if(hour >= 13) {
            hour -= 12;
        }

        if(hour >= 12) {
            ampm = "pm";
        } 

        function zero(num) {
            if(num < 10) {
                num = "0" + num;
            }  
            return num;
        }

        var tmp = ['일', '월', '화','수','목','금','토'];

        console.log(year + "-" + zero(month) + "-" + zero(date) + " "+tmp[day]+"요일" + zero(hour) + ":" + zero(min) + ":" + zero(sec) + " " + ampm);

        $('.clock').text(year + "-" + zero(month) + "-" + zero(date) + "  " + zero(hour) + ":" + zero(min) + ":" + zero(sec) + " " );
        $('.time').text(year + "." + zero(month) + "." + zero(date) + "  " + "  " + "  " +zero(hour) + ":" + zero(min) + ":" + zero(sec) + " " );

        time