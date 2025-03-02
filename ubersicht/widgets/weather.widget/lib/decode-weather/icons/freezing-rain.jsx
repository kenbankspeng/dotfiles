import { styled } from "uebersicht";
import { colors } from "../theme.js";

const Svg = styled("svg")`
  display: block;
	.cloud {
    fill: ${colors.text};
  }
	.precipitation {
    fill: ${colors.blue};
  }
`;

export const FreezingRain = (props) => {
	return (
		<Svg viewBox="0 0 200 200" {...props}>
			<title>Freezing Rain</title>
			<path
				className="cloud"
				d="M59.694 92.473c2.238-10.8 13.266-32.983 39.401-31.446 27.803 1.635 36.027 20.475 38.83 30.639 7.145.151 19.243 1.289 27.167 9.718 5.218 5.551 9.131 13.987 8.824 27.031-.294 12.469-11.774 26.563-24.142 29.85-9.87 2.623-28.724 1.291-47.131.936-16.87-.325-33.365.48-42.224-.621-8.593-1.069-17.961-8.497-21.796-14.136-3.991-5.87-5.19-12.478-5.178-18.679.022-10.397 3.434-16.557 7.253-21.658 5.878-7.852 13.634-10.551 18.996-11.634m10.18 10.227c-7.902 1.07-13.874 1.4-19.208 8.526-2.468 3.297-4.633 7.931-4.647 14.651a20 20 0 0 0 3.426 11.166c2.429 3.574 8.09 8.711 13.527 9.226 7.742.733 23.272.409 39.359.564 17.324.166 35.095.906 43.62-.769 8.02-1.576 15.3-11.324 15.478-18.879.198-8.413-2.686-13.088-6.052-16.668-7.815-8.314-14.76-6.575-20.145-6.735-1.997-.06-7.05-.045-7.05-.045s-.422-3.737-.577-5.581c0 0-2.997-23.542-29.046-25.074-11.026-.648-18.547 5.237-22.365 11.348-4.146 6.636-3.834 6.406-4.887 9.451-.974 2.814-.948 6.219-1.433 8.819"
				transform="translate(-7.822 -24.874)scale(1.0399)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(.21312 0 0 -.40897 -27.621 360.678)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.10656 .18526 .35285 -.20448 -152.628 177.56)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.10656 .18526 .35285 .20448 -57.143 -22.667)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(-.21312 0 0 .40897 163.35 -39.776)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.1065 -.1853 -.3529 .20438 288.362 143.405)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.10656 -.18526 -.35285 -.20448 192.872 343.57)"
			/>
			<path
				className="precipitation"
				d="m827.705 439.53.185.901q.538.083 1.047.28l.61-.687q.514.233.973.561l-.29.873q.424.34.766.766l.872-.29q.327.459.562.972l-.688.611q.198.507.281 1.046l.9.185q.056.562 0 1.123l-.9.185a5 5 0 0 1-.281 1.047l.688.61a6 6 0 0 1-.562.973l-.872-.29a5 5 0 0 1-.766.766l.29.872a6 6 0 0 1-.973.562l-.61-.688a5 5 0 0 1-1.047.281l-.185.9a5.7 5.7 0 0 1-1.123 0l-.185-.9a5 5 0 0 1-1.046-.281l-.611.688a6 6 0 0 1-.972-.562l.29-.872a5 5 0 0 1-.766-.766l-.873.29a6 6 0 0 1-.561-.973l.687-.61a5 5 0 0 1-.28-1.047l-.901-.185a6 6 0 0 1 0-1.123l.901-.185q.083-.539.28-1.046l-.687-.611a6 6 0 0 1 .561-.972l.873.29q.34-.426.766-.766l-.29-.873a6 6 0 0 1 .972-.561l.611.687a5 5 0 0 1 1.046-.28l.185-.901q.562-.054 1.123 0"
				transform="matrix(.33964 0 0 .34092 -213.07 8.635)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(.21312 0 0 -.40897 20.383 365.18)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.10656 .18526 .35285 -.20448 -104.624 182.062)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.10656 .18526 .35285 .20448 -9.14 -18.165)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(-.21312 0 0 .40897 211.353 -35.274)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.1065 -.1853 -.3529 .20438 336.366 147.907)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.10656 -.18526 -.35285 -.20448 240.876 348.07)"
			/>
			<path
				className="precipitation"
				d="m827.705 439.53.185.901q.538.083 1.047.28l.61-.687q.514.233.973.561l-.29.873q.424.34.766.766l.872-.29q.327.459.562.972l-.688.611q.198.507.281 1.046l.9.185q.056.562 0 1.123l-.9.185a5 5 0 0 1-.281 1.047l.688.61a6 6 0 0 1-.562.973l-.872-.29a5 5 0 0 1-.766.766l.29.872a6 6 0 0 1-.973.562l-.61-.688a5 5 0 0 1-1.047.281l-.185.9a5.7 5.7 0 0 1-1.123 0l-.185-.9a5 5 0 0 1-1.046-.281l-.611.688a6 6 0 0 1-.972-.562l.29-.872a5 5 0 0 1-.766-.766l-.873.29a6 6 0 0 1-.561-.973l.687-.61a5 5 0 0 1-.28-1.047l-.901-.185a6 6 0 0 1 0-1.123l.901-.185q.083-.539.28-1.046l-.687-.611a6 6 0 0 1 .561-.972l.873.29q.34-.426.766-.766l-.29-.873a6 6 0 0 1 .972-.561l.611.687a5 5 0 0 1 1.046-.28l.185-.901q.562-.054 1.123 0"
				transform="matrix(.33964 0 0 .34092 -165.064 13.136)"
			/>
			<path
				className="precipitation"
				d="m1165.37 756.668 5.41 7.482-5.41 7.482-5.4-7.482z"
				transform="matrix(1.63866 0 0 1.63867 -1866.299 -1092.674)"
			/>
			<path
				className="precipitation"
				d="m1165.37 756.668 5.41 7.482-5.41 7.482-5.4-7.482z"
				transform="matrix(1.63866 0 0 1.63867 -1752.992 -1092.674)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 12.306 10.862 17.58c0 5.58-4.867 10.11-10.862 10.11s-10.862-4.53-10.862-10.11c0-5.274 10.862-17.58 10.862-17.58"
				transform="matrix(.73658 0 0 .79134 -240.697 -226.246)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 12.306 10.862 17.58c0 5.58-4.867 10.11-10.862 10.11s-10.862-4.53-10.862-10.11c0-5.274 10.862-17.58 10.862-17.58"
				transform="matrix(.73658 0 0 .79134 -190.215 -222.48)"
			/>
		</Svg>
	);
};
