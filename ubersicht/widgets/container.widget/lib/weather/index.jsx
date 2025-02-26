import { styled } from "uebersicht"; // run, css
import { Hello } from "./lib/hello/hello.jsx";
import { Clouds, Lightning, Sun, Wind } from "./lib/icons.jsx";

// single command at refreshFrequency
const weather_current =
	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FChicago";

// const weather_forecast =
// 	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&timezone=America%2FChicago";

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
	left: 35px;
	top: 35px;
	font-family: Helvetica;
	font-size: 20px;
	font-weight: bold;
	z-index: 1;

	path {
		fill: white;
	}
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

const Grid = styled("div")`
	display: grid;
	grid-template-columns: 200px;
	gap: 10px;
`;

export const render = ({ output, error }, dispatch) => {
	if (!output) return null;
	const weather = JSON.parse(output);

	return error ? (
		<h2>
			Something went wrong: <strong>{String(error)}</strong>
		</h2>
	) : (
		<main>
			<article id="content">
				<div id="windscale">windscale</div>
				<div>
					<Hello />
					<div id="temp">{weather.current.temperature_2m}</div>
					<Grid>
						<Clouds />
						<Wind />
					</Grid>
					<Sun />
					<Lightning />
				</div>
			</article>
		</main>
	);
};
