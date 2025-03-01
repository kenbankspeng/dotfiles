// single command at refreshFrequency

const currentWeather =
	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FChicago";

export const currentWeatherRefresh = 1000 * 60 * 60; // app refresh time in ms: 1 hour

const weatherForecast =
	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&timezone=America%2FChicago";

export const weatherForecastRefresh = 1000 * 60 * 60 * 24; // app refresh time in ms: 24 hours

export const getCurrentWeatherQuery = () => `curl --silent "${currentWeather}"`;
export const getWeatherForecastQuery = () =>
	`curl --silent "${weatherForecast}"`;
