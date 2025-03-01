import { widgetStyle } from "./lib/util.js";
import { getWeatherQuery, WeatherIcon } from "./lib/weather-icon.js";

const x = 100;
const y = 100;
const w = 200;
const h = 450;

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

// prefer styled over globalCss
const globalCss = `
	border: 1px solid #80808040;
`;

export const className = widgetStyle(x, y, w, h, globalCss);

// export const command = getWeatherQuery();
export const command = "echo 'test'";
export const refreshFrequency = 36000000; // app refresh time in ms: 10 hours

export const render = ({ output }) => {
	// if (output === undefined) return null;
	// const weather = JSON.parse(output);
	// weather.current.weather_code

	//{weather.current.weather_code}

	// 		<h1>{weather.current.temperature_2m}</h1>
	return (
		<div>
			<WeatherIcon weatherCode={67} />
			<WeatherIcon weatherCode={66} />
		</div>
	);
};
