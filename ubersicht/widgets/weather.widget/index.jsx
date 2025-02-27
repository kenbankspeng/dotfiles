import { widgetStyle } from "./lib/util.js";
import { getWeatherQuery, getWeatherIcon } from "./lib/weather.js";

const size = [100, 100, 200, 200]; // X, Y, W, H

const style = `
	path {
		fill: white;
	}
`;

export const className = widgetStyle(size, style);

export const command = getWeatherQuery();
export const refreshFrequency = 36000000; // app refresh time in ms: 10 hours

export const render = ({ output }) => {
	if (output === undefined) return null;
	const weather = JSON.parse(output);
	const weatherIcon = getWeatherIcon(weather.current.weather_code);

	return (
		<div>
			{weatherIcon}
			<h1>{weather.current.temperature_2m}</h1>
		</div>
	);
};
