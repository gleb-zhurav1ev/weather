const time = document.querySelector('#time')
const temperature = document.querySelector('#temperature')
const speed_of_wind = document.querySelector('#speed_of_wind')
const rain = document.querySelector('#rain')

const url = 'https://api.open-meteo.com/v1/forecast?latitude=53.9&longitude=27.5667&current=temperature_2m,is_day,rain,wind_speed_10m&hourly=&timezone=auto'

// const url = 'https://api.open-meteo.com/v1/forecast?latitude=69.3&longitude=65.0&current=temperature_2m,is_day,rain,wind_speed_10m&hourly=&timezone=auto'

fetch(url).
	then((data) =>{
		return data.json();
	})
	.then((info) => {
		renderWeather(info.current)
	})

	function renderWeather(data) {
		time.innerText = `Сейчас ${data.is_day === 0 ? 'ночь' : 'день'}`
		temperature.innerText = `${data.temperature_2m >= 0 ? '+' : ''}${data.temperature_2m}`
		speed_of_wind.innerText = `Скорость ветра: ${data.wind_speed_10m} м/с`
		rain.innerText = `Сейчас ${data.rain === 0 ? 'нет дождя':'идет дождь'}`
	}