/*
- Sign up for openweathermap.org and generate an API key.
	* my api key = 40a5206a53074b4971878061041235ca
- Use either $.ajax or $.get to pull weather current data for London
- Print the temperature in console.
- Possible next steps
- 1: Display the temperature in the UI rather than the console
- 2: Display an icon or image depending on the current weather
- 3: add a form prompting user for the city.
- 4: add a toggle for switching between farenheit and celcius

- open-weather-map api json docs can be found here - http://bulk.openweathermap.org/sample/
* Example api response: 
						{"coord":{"lon":139,"lat":35},
						"sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
						"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
						"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
						"wind":{"speed":7.31,"deg":187.002},
						"rain":{"3h":0},
						"clouds":{"all":92},
						"dt":1369824698,
						"id":1851632,
						"name":"Shuzenji",
						"cod":200}
*/

var app = { };

app.getWeather = function(){
	var cityId = $( this ).val();
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&appid=40a5206a53074b4971878061041235ca',
			success: function( weatherAPI ){
				var temp = Math.floor((weatherAPI.main.temp - 273.15)*9/5)+32 ; 
				var sky = weatherAPI.weather[0].description ;
				var wind = weatherAPI.wind.speed ;
				$( '#temp' ).text( temp + '°' );
				$( '#sky' ).text( sky );
				$( '#wind' ).text( 'wind speed = ' + Math.ceil(wind) + 'mph');
		}
	});
};


/*
app.getTime = function(){
    var cityTime = $( this ).val();
        $.ajax({
           success: function( city ){
            var LGW = now() + 0;
            var CDG = now() + 1;
            var LAX = now() + 2;
            var MEL = now() + 3;
            var SFO = now() + 4;
            var SBA = now() + 5;
            $( '#cityTime' ).text( SBA );
    }
    }
}
*/

/*
                var time = getTime();
                $( '#cityTime' ).text( time );
	- look up all weather.descriptions 
	- if else statement could match each description with an apropriate weather icon
*/

app.init = function(){
  $( '#city' ).on( 'change', app.getWeather ).trigger( 'change' );

}

$( document ).ready( app.init );




/*

    if (countryCode === 'AU') {
        $('#page2').css('background-image', 'url(https://c2.staticflickr.com/8/7563/15467644144_44da4dd226_h.jpg)');
        $('select').val('AU');
    } else if (countryCode === 'CA') {
        $('#page2').css('background-image', 'url(https://c2.staticflickr.com/8/7507/15470276073_51cca144e2_h.jpg)');
    }
    else if (countryCode === 'FR') {
        $('#page2').css('background-image', 'url(https://c4.staticflickr.com/8/7570/15470275483_961ba05ce4_b.jpg)');
    }
    else if (countryCode === 'DE') {
        $('#page2').css('background-image', 'url(https://c2.staticflickr.com/8/7494/15903864429_4e60194665_k.jpg)');
    }
    else if (countryCode === 'IT') {
        $('#page2').css('background-image', 'url(https://c2.staticflickr.com/8/7495/15902674050_becfecf552_h.jpg)');
    }
    else if (countryCode === 'ES') {
        $('#page2').css('background-image', 'url(https://c4.staticflickr.com/8/7583/15903854449_eb2c8c6ea9_h.jpg)');
    }
    else if (countryCode === 'UK') {
        $('#page2').css('background-image', 'url(https://c2.staticflickr.com/8/7461/15902512388_cafe943334_h.jpg)');
    }
    else if (countryCode === 'US') {
        $('#page2').css('background-image', 'url(https://c1.staticflickr.com/9/8592/16089961865_7f573696e8_k.jpg)');
    }
   else {
        $('#page2').css('background-image', 'url(https://c1.staticflickr.com/9/8581/16089246042_2c187e4d7f_h.jpg)');
    }
}
*/






