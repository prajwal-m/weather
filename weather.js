const weather = (function() {

    function handleData(data) {
        console.log(data);
        console.log(data.weather[0].main);
        var iconData =
            "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(iconData);
        $(".icon").attr("src", iconData);

        console.log(data.main);
        console.log(data.main.temp);
    }


    $("#submitLocation").click(function() {
        //get value from input field
        var city = $("#city").val();

        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric" +
                "&APPID=dd0a35b369a8e78de9c760a313ef7b00",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
                handleData(data);
            }
        });
    });

})();