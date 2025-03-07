import { styled, run } from "uebersicht";
import { widgetStyle } from "./lib/util/util.js";
import { colors } from "./lib/weather-type/theme.js";
import { getWeatherType } from "./lib/weather-type/weather-type.jsx";
import {
	getCurrentWeatherQuery,
	currentWeatherRefresh,
} from "./lib/api/api.js";
import { Temperature } from "./lib/temperature/temperature.jsx";

const x = 100;
const y = 100;
const w = undefined;
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
	grid-template-columns: 100px 100px;
	justify-items: center;
	justify-content: center;
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

let index = -1;
const weatherCodes = [
	0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77,
	80, 81, 82, 85, 86, 95, 96, 99,
];

// export const command = getCurrentWeatherQuery();
// export const refreshFrequency = currentWeatherRefresh;

// called once per component instance, except in dev environment
export const init = (dispatch) => {
	const timer = setInterval(() => tick(dispatch), 10000);
	return () => clearInterval(timer);
};

const tick = (dispatch) => {
	index++;
	if (index > weatherCodes.length - 1) {
		index = 0;
	}
	dispatch({ type: "TICK", index });
	// run(`echo "${new Date().toLocaleTimeString()}"`).then((output) =>
	// 	dispatch({ type: "TICK", output }),
	// );
};

export const updateState = (event, previousState) => {
	console.log(event);
	if (event.type === "TICK") {
		return {
			...previousState,
			...event,
		};
	}
	return previousState;
};

export const render = (props, dispatch) => {
	const { index } = props;
	const { Icon, desc } = getWeatherType({ weatherCode: weatherCodes[index] });
	const temperature = -6.3;

	return (
		<Base>
			<Title>London {index}</Title>
			<Grid>
				<Section>
					<Temperature />
				</Section>
				<Section>
					<Icon />
					<Section>{desc}</Section>
				</Section>
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
