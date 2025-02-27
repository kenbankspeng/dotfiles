import { Clouds, Lightning, Sun, Wind } from "./icons.jsx";

// single command at refreshFrequency

// const weather_forecast =
// 	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&timezone=America%2FChicago";

const api =
	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FChicago";

export const getWeatherQuery = () => `curl --silent "${api}"`;

// 	{
// 		"current": {
// 			"time": "2025-02-24T22:00",
// 			"interval": 900,
// 			"temperature_2m": 2,
// 			"relative_humidity_2m": 73,
// 			"apparent_temperature": -3.3,
// 			"is_day": 0,
// 			"precipitation": 0,
// 			"rain": 0,
// 			"showers": 0,
// 			"snowfall": 0,
// 			"weather_code": 3,
// 			"cloud_cover": 100,
// 			"pressure_msl": 1005.3,
// 			"surface_pressure": 975.3,
// 			"wind_speed_10m": 19.7,
// 			"wind_direction_10m": 230,
// 			"wind_gusts_10m": 36
// 	}
// 	"current_units": {
// 			"time": "iso8601",
// 			"interval": "seconds",
// 			"temperature_2m": "°C",
// 			"relative_humidity_2m": "%",
// 			"apparent_temperature": "°C",
// 			"is_day": "",
// 			"precipitation": "mm",
// 			"rain": "mm",
// 			"showers": "mm",
// 			"snowfall": "cm",
// 			"weather_code": "wmo code",
// 			"cloud_cover": "%",
// 			"pressure_msl": "hPa",
// 			"surface_pressure": "hPa",
// 			"wind_speed_10m": "km/h",
// 			"wind_direction_10m": "°",
// 			"wind_gusts_10m": "km/h"
// 		}
// }

// WMO Weather Code
// weather_code		Description
// 0						Clear sky
// 1, 2, 3			Mainly clear, partly cloudy, and overcast
// 45, 48				Fog and depositing rime fog
// 51, 53, 55		Drizzle: Light, moderate, and dense intensity
// 56, 57				Freezing Drizzle: Light and dense intensity
// 61, 63, 65		Rain: Slight, moderate and heavy intensity
// 66, 67				Freezing Rain: Light and heavy intensity
// 71, 73, 75		Snow fall: Slight, moderate, and heavy intensity
// 77						Snow grains
// 80, 81, 82		Rain showers: Slight, moderate, and violent
// 85, 86				Snow showers slight and heavy
// 95 *					Thunderstorm: Slight or moderate
// 96, 99 *			Thunderstorm with slight and heavy hail

export const getWeatherIcon = (weatherCode) => {
	switch (weatherCode) {
		case 0:
			return <Sun />;
		case 1:
			return <Sun />;
		case 2:
			return <Sun />;
		case 3:
			return <Sun />;
		case 45:
			return <Sun />;
		case 48:
			return <Sun />;
		case 51:
			return <Sun />;
		case 53:
			return <Sun />;
		case 55:
			return <Sun />;
		case 56:
			return <Sun />;
		case 57:
			return <Sun />;
		case 61:
			return <Sun />;
		case 63:
			return <Sun />;
		case 65:
			return <Sun />;
		case 66:
			return <Sun />;
		case 67:
			return <Sun />;
		case 71:
			return <Sun />;
		case 73:
			return <Sun />;
		case 75:
			return <Sun />;
		case 77:
			return <Sun />;
		case 80:
			return <Sun />;
		case 81:
			return <Sun />;
		case 82:
			return <Sun />;
		case 85:
			return <Sun />;
		case 86:
			return <Sun />;
		case 95:
			return <Sun />;
		case 96:
			return <Sun />;
		case 99:
			return <Sun />;
		default:
			return <Sun />;
	}
};
