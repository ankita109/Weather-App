const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e4f84fcc79mshe9762f8ee3df4f2p1eabdbjsn458855c83559',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
	cityName.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		
		temp.innerHTML= response. temp
        temp2.innerHTML= response. temp
		feels_like.innerHTML= response. feels_like
		humidity.innerHTML= response.humidity
		humidity2.innerHTML= response.humidity
		min_temp.innerHTML= response. min_temp
		max_temp.innerHTML= response. max_temp
		wind_speed.innerHTML= response.wind_speed
		wind_speed2.innerHTML= response.wind_speed
		wind_degrees.innerHTML= response. wind_degrees
		sunrise.innerHTML= response. sunrise
		sunset.innerHTML= response.sunset
	
	})
	.catch(err => console.error(err));
}

const cgetWeather=()=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chandigarh', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		
		ctemp.innerHTML= response. temp
		cfeels_like.innerHTML= response. feels_like
		chumidity.innerHTML= response.humidity
		cmin_temp.innerHTML= response. min_temp
		cmax_temp.innerHTML= response. max_temp
		cwind_speed.innerHTML= response.wind_speed
		cwind_degrees.innerHTML= response. wind_degrees
		csunrise.innerHTML= response. sunrise
		csunset.innerHTML= response.sunset
	
	})
	.catch(err => console.error(err));
}

const RgetWeather=()=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ranchi' , options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		
		Rtemp.innerHTML= response. temp
		Rfeels_like.innerHTML= response. feels_like
		Rhumidity.innerHTML= response.humidity
		Rmin_temp.innerHTML= response. min_temp
		Rmax_temp.innerHTML= response. max_temp
		Rwind_speed.innerHTML= response.wind_speed
		Rwind_degrees.innerHTML= response. wind_degrees
		Rsunrise.innerHTML= response. sunrise
		Rsunset.innerHTML= response.sunset
	
	})
	.catch(err => console.error(err));
}

const lgetWeather=()=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		
		ltemp.innerHTML= response. temp
		lfeels_like.innerHTML= response. feels_like
		lhumidity.innerHTML= response.humidity
		lmin_temp.innerHTML= response. min_temp
		lmax_temp.innerHTML= response. max_temp
		lwind_speed.innerHTML= response.wind_speed
		lwind_degrees.innerHTML= response. wind_degrees
		lsunrise.innerHTML= response. sunrise
		lsunset.innerHTML= response.sunset
	
	})
	.catch(err => console.error(err));
}

const pgetWeather=()=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=patna' , options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		
		ptemp.innerHTML= response. temp
		pfeels_like.innerHTML= response. feels_like
		phumidity.innerHTML= response.humidity
		pmin_temp.innerHTML= response. min_temp
		pmax_temp.innerHTML= response. max_temp
		pwind_speed.innerHTML= response.wind_speed
		pwind_degrees.innerHTML= response. wind_degrees
		psunrise.innerHTML= response. sunrise
		psunset.innerHTML= response.sunset
	
	})
	.catch(err => console.error(err));
}

const dgetWeather=(city)=>{
	cityName.innerHTML=city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Daltonganj', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			temp.innerHTML= response. temp
			temp2.innerHTML= response. temp
			feels_like.innerHTML= response. feels_like
			humidity.innerHTML= response.humidity
			humidity2.innerHTML= response.humidity
			min_temp.innerHTML= response. min_temp
			max_temp.innerHTML= response. max_temp
			wind_speed.innerHTML= response.wind_speed
			wind_speed2.innerHTML= response.wind_speed
			wind_degrees.innerHTML= response. wind_degrees
			sunrise.innerHTML= response. sunrise
			sunset.innerHTML= response.sunset
				
		
		})
		.catch(err => console.error(err));
	}

	const bgetWeather=(city)=>{
		cityName.innerHTML=city;
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Betla', options)
			.then(response => response.json())
			.then((response) => {
				console.log(response)
				
				temp.innerHTML= response. temp
				temp2.innerHTML= response. temp
				feels_like.innerHTML= response. feels_like
				humidity.innerHTML= response.humidity
				humidity2.innerHTML= response.humidity
				min_temp.innerHTML= response. min_temp
				max_temp.innerHTML= response. max_temp
				wind_speed.innerHTML= response.wind_speed
				wind_speed2.innerHTML= response.wind_speed
				wind_degrees.innerHTML= response. wind_degrees
				sunrise.innerHTML= response. sunrise
				sunset.innerHTML= response.sunset
			
			})
			.catch(err => console.error(err));
		}

		const phgetWeather=(city)=>{
			cityName.innerHTML=city;
			fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Phagwara', options)
				.then(response => response.json())
				.then((response) => {
					console.log(response)
					temp.innerHTML= response. temp
					temp2.innerHTML= response. temp
					feels_like.innerHTML= response. feels_like
					humidity.innerHTML= response.humidity
					humidity2.innerHTML= response.humidity
					min_temp.innerHTML= response. min_temp
					max_temp.innerHTML= response. max_temp
					wind_speed.innerHTML= response.wind_speed
					wind_speed2.innerHTML= response.wind_speed
					wind_degrees.innerHTML= response. wind_degrees
					sunrise.innerHTML= response. sunrise
					sunset.innerHTML= response.sunset
				
				
				})
				.catch(err => console.error(err));
			}
			
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value);
});

dalt.addEventListener("click",(e)=>{
	e.preventDefault();
	dgetWeather("Daltonganj");
});

bet.addEventListener("click",(e)=>{
	e.preventDefault();
	bgetWeather("Betla");
});

phag.addEventListener("click",(e)=>{
	e.preventDefault();
	phgetWeather("Phagwara");
});

getWeather("Delhi");
cgetWeather();
RgetWeather();
lgetWeather();
pgetWeather();