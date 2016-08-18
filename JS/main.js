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
                var tempMin = Math.floor((weatherAPI.main.temp_min - 273.15)*9/5)+32 ;
                var tempMax = Math.floor((weatherAPI.main.temp_max - 273.15)*9/5)+32 ; 
				var sky = weatherAPI.weather[0].description ;
				var wind = weatherAPI.wind.speed ;
                var sunrise = weatherAPI.sys.sunrise ;
                var sunset = weatherAPI.sys.sunset ;
                var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
				$( '#temp' ).text( temp + '°' );
				$( '#sky' ).text( sky );
				$( '#wind' ).text( 'wind speed = ' + Math.ceil(wind) + 'mph');
                $( '#dt' ).text( utcDate );
		}
	});
};

/*  BUG #1

    Would like to add in the current time for selected city...but ran into confusion

                
*/

/*  BUG #2

    List of all possible weather conditions ('sky' responses - http://openweathermap.org/weather-conditions )
    Would like to match each 'sky' description with an apropriate weather icon
    ...and add that icon to the display
*/


app.init = function(){
  $( '#city' ).on( 'change', app.getWeather ).trigger( 'change' );

}

$( document ).ready( app.init );


/*

Another design included background images of the selected city...

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






