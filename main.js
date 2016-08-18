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
				$( '#temp' ).text( temp + '°' );
				$( '#sky' ).text( sky );
				$( '#wind' ).text( 'wind speed = ' + Math.ceil(wind) + 'mph');
                // $( '#dt' ).text( utcDate );
		}
	});
        var matching = 
};

/*  BUG #1
    Would like to add in the current time for selected city...but ran into confusion
*/



/*  BUG #2
    List of all possible weather conditions ('sky' responses - http://openweathermap.org/weather-conditions )
    Would like to match each 'sky' description with an apropriate weather icon
    ...and add that icon to the html displayed

    pseudo:
    a. 
*/

getWeather.weatherIcon = [     
     {
         description: 'broken clouds',
         tod: '',
         dayIcon: 'wi-day-cloudy-high',
         nightIcon: 'wi-night-alt-cloudy'
     },
     {
         description: 'calm',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'clear sky',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'cold',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'few clouds',
         tod: '',
         dayIcon: 'wi-day-sunny-overcast',
         nightIcon: 'wi-night-partly-cloudy'
     },
     {
         description: 'drizzle',
         tod: '',
         dayIcon: 'wi-day-sunny-overcast',
         nightIcon: 'wi-night-partly-cloudy'
     },
     {
         description: 'dust',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'extreme rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'few clouds',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'fog',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'freezing rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'fresh breeze',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'gale',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'gentle breeze',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'hail',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'haze',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'heavy intensity drizzle',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'heavy intensity drizzle rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'heavy intensity rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'heavy intensity shower rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'heavy shower rain and drizzle',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'heavy shower snow',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'heavy snow',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'heavy thunderstorm',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'high wind, near gale',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'hot',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'hurricane',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'light breeze',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'light intensity drizzle',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'light intensity drizzle rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'light intensity shower rain',
         tod: '',
         dayIcon: 'wi-day-sunny-overcast',
         nightIcon: 'wi-night-partly-cloudy'
     },
     {
         description: 'light rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'          
     },
     {
         description: 'light rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'light rain and snow',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'light shower snow',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'light snow',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'light thunderstorm',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'mist',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'moderate breeze',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'moderate rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'overcast clouds',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'ragged shower rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'ragged thunderstorm',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'rain and snow',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'sand',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'sand, dust whirls',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'scattered clouds',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'severe gale',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'shower drizzle',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'shower rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'shower rain and drizzle',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'shower sleet',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'shower snow',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'sleet',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'smoke',
         tod: '',
         dayIcon: 'wi-day-sunny-overcast',
         nightIcon: 'wi-night-partly-cloudy'
     },
     {
         description: 'snow',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'squalls',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'storm',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'strong breeze',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'thunderstorm',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'thunderstorm with drizzle',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'thunderstorm with heavy drizzle',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'thunderstorm with heavy rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'thunderstorm with light drizzle',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'thunderstorm with light rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'thunderstorm with rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'tornado',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'tropical storm',
         tod: '',
         dayIcon: 'wi-day-sunny-overcast',
         nightIcon: 'wi-night-partly-cloudy'
     },
     {
         description: 'very heavy rain',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'violent storm',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'volcanic ash',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     },
     {
         description: 'windy',
         tod: '',
         dayIcon: 'wi-day-sunny',
         nightIcon: 'wi-night-clear'
     }

];

};

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






