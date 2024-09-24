const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoApiOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "f39b9eebd3mshab5d75b80b3615ap17acabjsn59b13fce28f1",
		"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
	},
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "2de3b7e8cf453727fa2846018e6b22fc"; // enter your key from openweather API

// try {
// 	const response = await fetch('/cities', geoApiOptions);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }