const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af72316325mshc626939524cc078p130856jsnee558585b55b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		cloud_pct.innerHTML = response.cloud_pct,
		feels_like.innerHTML = response.feels_like,
		humidity.innerHTML = response.humidity,
		max_temp.innerHTML = response.max_temp,
		min_temp.innerHTML = response.min_temp,
		sunrise.innerHTML = response.sunrise,
		sunset.innerHTML = response.sunset,
		temp.innerHTML = response.temp,
		wind_degrees.innerHTML = response.wind_degrees,
		wind_speed.innerHTML = response.wind_speed;
	}).catch(err => console.error(err));

relaodScreen = () => window.location.reload();