// import { run, css, styled } from "uebersicht";
import * as Hello from "./lib/hello/hello.jsx";
import { injectStyles } from "./lib/utils";

injectStyles("weather.app-styles", [Hello.css]);

// single command at refreshFrequency
const weather_current =
	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FChicago";

export const weather_forecast =
	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&timezone=America%2FChicago";

export const command = `curl --silent "${weather_current}"`;

export const refreshFrequency = 36000000; // app refresh time in ms: 10 hours

// export const command = (dispatch) => {
// 	const months = [];

// 	dispatch({
// 		type: "DATA",
// 		data: {},
// 	});
// };

export const className = `
	color: white;
	right: 35px;
	top: 35px;
	font-family: Helvetica;
	font-size: 20px;
	font-weight: bold;
	z-index: 1;
`;

// export const init = (dispatch) => {
// 	// called at the beginning of the app
// };

export const initialState = { output: "" };

// // the output of updateState is passed to render
// // if no updateState is provided, the output of command is passed to render
// export const updateState = (event, previousState) => {
// 	switch (event.type) {
// 		case "UB/COMMAND_RAN":
// 			return { ...previousState, output: event.output };
// 		default:
// 			return previousState;
// 	}
// };

const iconMapping = {
	unknown: "&#xf03e;",
	"01d": "&#xf00d;",
	"01n": "&#xf02e;",
	"02d": "&#xf00c;",
	"02n": "&#xf081;",
	"03d": "&#xf002;",
	"03n": "&#xf031;",
	"04d": "&#xf013;",
	"04n": "&#xf013;",
	"09d": "&#xf01a;",
	"09n": "&#xf01a;",
	"10d": "&#xf019;",
	"10n": "&#xf019;",
	"11d": "&#xf01e;",
	"11n": "&#xf01e;",
	"13d": "&#xf01b;",
	"13n": "&#xf01b;",
	"50d": "&#xf003;",
	"50n": "&#xf04a;",
	wind3: "&#xf0ba;",
	wind4: "&#xf0bb;",
	wind5: "&#xf0bc;",
	wind6: "&#xf0bd;",
	wind7: "&#xf0be;",
	wind8: "&#xf0bf;",
	wind9: "&#xf0c0;",
	wind10: "&#xf0c1;",
	wind11: "&#xf0c2;",
	wind12: "&#xf0c3;",
	none: "",
};

const getIcon = (data) => {
	if (!data) return iconMapping[[data.icon]];
	return iconMapping.unknown;
};

const getWind = (data) => {
	if (data.speed > 32.7) return iconMapping.wind12;
	if (data.speed > 28.5) return iconMapping.wind11;
	if (data.speed > 24.5) return iconMapping.wind10;
	if (data.speed > 20.8) return iconMapping.wind9;
	if (data.speed > 17.2) return iconMapping.wind8;
	if (data.speed > 13.9) return iconMapping.wind7;
	if (data.speed > 10.8) return iconMapping.wind6;
	if (data.speed > 8) return iconMapping.wind5;
	if (data.speed > 5.5) return iconMapping.wind4;
	if (data.speed > 3.4) return iconMapping.wind3;
	return iconMapping.none;
};

export const render = ({ output, error }, dispatch) => {
	const weather = JSON.parse(output);

	return error ? (
		<h2>
			Something went wrong: <strong>{String(error)}</strong>
		</h2>
	) : (
		<main>
			<article id="content">
				<div id="windscale">windscale</div>
				<div id="left">
					<Hello.Widget />
					<div id="temp">{weather.current.temperature_2m}</div>
					<div id="condition">condition</div>
				</div>
			</article>
		</main>
	);
};
