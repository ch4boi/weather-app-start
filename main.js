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
			success: function( response ){
				var temp = (Math.floor(response.main.temp - 273.15)*9/5)+32 ; 
				var sky = response.weather[0].description ;
				var wind = response.wind.speed ;
				$( '#response' ).text( '°' + temp + ' ' + 'and ' +  '  ' + sky + '  ' + 'wind speed = ' + wind);
				/* $( '#response' ).text( sky ); */
		}
	});
};

/* 
	- look up all weather.descriptions 
	- if else statement could match each description with an apropriate weather icon
*/

app.init = function(){
  $( '#city' ).on( 'change', app.getWeather ).trigger( 'change' );

}

$( document ).ready( app.init );










