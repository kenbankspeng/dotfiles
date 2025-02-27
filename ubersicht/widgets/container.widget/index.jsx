import { styled } from "uebersicht"; // run, css
import { Weather } from "./lib/weather/weather.jsx";

const DEBUG = false;

const H_MARGIN = "100px";
const V_MARGIN = "100px";
const DOCK_HEIGHT = "38px";
const GAP = "30px";

export const className = `
	/* reset */
	* {
		box-sizing: border-box;
	}

	/* container */
	position: absolute;
	left: ${H_MARGIN};
	top: ${V_MARGIN};
	display: flex;
	width: calc(100% - 2 * ${H_MARGIN});		
	height: calc(100% - 2 * ${V_MARGIN} - ${DOCK_HEIGHT});
	overflow: hidden;

	color: #cdd6f480;
	font-family: Helvetica;
	font-size: 20px;
	font-weight: bold;
	z-index: 1;
`;

const Grid = styled("div")`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: ${GAP};
	width: 100%;
	
`;

const Cell = styled("div")`
	background: red;
`;

export const render = ({ output, error }, dispatch) => {
	return (
		<Grid>
			<Weather />
			<Cell />
			<Cell />
			<Cell />
		</Grid>
	);
};

// // single command at refreshFrequency
// const weather_current =
// 	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FChicago";

// // const weather_forecast =
// // 	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&timezone=America%2FChicago";

// export const command = `curl --silent "${weather_current}"`;

// export const refreshFrequency = 36000000; // app refresh time in ms: 10 hours

// 	path {
// 		fill: white;
// 	}
// `;

// export const init = (dispatch) => {
// 	// called at the beginning of the app
// };

// export const initialState = { output: "" };

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
