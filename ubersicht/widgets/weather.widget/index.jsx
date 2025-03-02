import { styled } from "uebersicht";
import { widgetStyle } from "./lib/util/util.js";
import { colors } from "./lib/weather-type/theme.js";
import { decodeWeather } from "./lib/weather-type/weather-type.jsx";
import {
	getCurrentWeatherQuery,
	currentWeatherRefresh,
} from "./lib/api/api.js";

const x = 100;
const y = 100;
const w = 280;
const h = undefined;

const BORDER = "1px solid #00FF0040";

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
	font-family: Helvetica;
	font-size: 12px;
	font-weight: bold;
	z-index: 1;
	color: #cdd6f4;
	border: ${BORDER};
`;

export const className = widgetStyle(x, y, w, h, globalCss);

export const command = "echo 'test'";
// export const command = getCurrentWeatherQuery();
export const refreshFrequency = currentWeatherRefresh;

const Base = styled("div")`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	align-content: top;
	gap: 5px;
	background-color: ${colors.base};
	border: ${BORDER};
	padding: 10px;
`;

const Grid = styled("div")`
	display: grid;
	grid-template-columns: 100px 1fr;
	justify-items: center;
	width: 100%;
	gap: 10px;
`;

const Section = styled("div")`
	border: ${BORDER};
	width: 100%;
`;

const Title = styled("div")`
	font-size: 14px;
	justify-self: start;
`;

export const render = ({ output }) => {
	// if (output === undefined) return null;
	// const weather = JSON.parse(output);
	// const weatherCode = weather.current.weather_code;
	const { Icon, desc } = decodeWeather({ weatherCode: 1 });

	//
	// <h1>{weather.current.temperature_2m}</h1>
	return (
		<Base>
			<Title>London</Title>
			<Grid>
				<Section>
					<Icon />
					<Section>{desc}</Section>
				</Section>
				<Section>...</Section>
			</Grid>
		</Base>
	);
};

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
