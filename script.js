$(document).ready(function(){	

	let 
		city = $('.weather-city'),
		desc = $('.weather-description'),
		wind = $('.weather-wind'),
		temp = $('.weather-temp'),
		input = $('.js-input'),
		btn = $('.js-btn');





		$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=498817&APPID=9352fa54abd975c2e318554350e4b475',function(resault){
			console.log(resault);
			setWeatherData(resault);
		});

		function setWeatherData(resault){
			city.text(resault.name);
			desc.text(resault.weather[0].description);
			wind.text(resault.wind.speed);
			temp.text(resault.main.temp);
		};

		btn.click(function(){
		$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + input.val() + '&APPID=9352fa54abd975c2e318554350e4b475',function(resault){
			setWeatherData(resault);
		});

	})

}); 