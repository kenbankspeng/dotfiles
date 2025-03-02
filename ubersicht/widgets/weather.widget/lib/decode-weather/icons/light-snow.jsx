import { styled } from "uebersicht";
import { colors } from "../theme.js";

const Svg = styled("svg")`
  display: block;
	.cloud {
    fill: ${colors.text};
  }
	.precipitation {
    fill: ${colors.white};
  }
`;

export const LightSnow = (props) => {
	return (
		<Svg viewBox="0 0 200 200" {...props}>
			<title>Light Snow</title>
			<path
				class="cloud"
				d="M59.694 92.473c2.238-10.8 13.266-32.983 39.401-31.446 27.803 1.635 36.027 20.475 38.83 30.639 7.145.151 19.243 1.289 27.167 9.718 5.218 5.551 9.131 13.987 8.824 27.031-.294 12.469-11.774 26.563-24.142 29.85-9.87 2.623-28.724 1.291-47.131.936-16.87-.325-33.365.48-42.224-.621-8.593-1.069-17.961-8.497-21.796-14.136-3.991-5.87-5.19-12.478-5.178-18.679.022-10.397 3.434-16.557 7.253-21.658 5.878-7.852 13.634-10.551 18.996-11.634m10.18 10.227c-7.902 1.07-13.874 1.4-19.208 8.526-2.468 3.297-4.633 7.931-4.647 14.651a20 20 0 0 0 3.426 11.166c2.429 3.574 8.09 8.711 13.527 9.226 7.742.733 23.272.409 39.359.564 17.324.166 35.095.906 43.62-.769 8.02-1.576 15.3-11.324 15.478-18.879.198-8.413-2.686-13.088-6.052-16.668-7.815-8.314-14.76-6.575-20.145-6.735-1.997-.06-7.05-.045-7.05-.045s-.422-3.737-.577-5.581c0 0-2.997-23.542-29.046-25.074-11.026-.648-18.547 5.237-22.365 11.348-4.146 6.636-3.834 6.406-4.887 9.451-.974 2.814-.948 6.219-1.433 8.819"
				transform="translate(-7.832 -24.875)scale(1.0399)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(.18502 0 0 -.35504 -21.91 334.83)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.0925 .16083 .30631 -.17752 -130.432 175.86)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.0925 .16083 .30631 .17752 -47.539 2.037)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(-.18502 0 0 .35504 143.877 -12.816)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.09246 -.16086 -.30636 .17743 252.404 146.209)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.0925 -.16083 -.30631 -.17752 169.506 319.977)"
			/>
			<path
				class="precipitation"
				d="m827.705 439.53.185.901q.538.083 1.047.28l.61-.687q.514.233.973.561l-.29.873q.424.34.766.766l.872-.29q.327.459.562.972l-.688.611q.198.507.281 1.046l.9.185q.056.562 0 1.123l-.9.185a5 5 0 0 1-.281 1.047l.688.61a6 6 0 0 1-.562.973l-.872-.29a5 5 0 0 1-.766.766l.29.872a6 6 0 0 1-.973.562l-.61-.688a5 5 0 0 1-1.047.281l-.185.9a5.7 5.7 0 0 1-1.123 0l-.185-.9a5 5 0 0 1-1.046-.281l-.611.688a6 6 0 0 1-.972-.562l.29-.872a5 5 0 0 1-.766-.766l-.873.29a6 6 0 0 1-.561-.973l.687-.61a5 5 0 0 1-.28-1.047l-.901-.185a6 6 0 0 1 0-1.123l.901-.185q.083-.539.28-1.046l-.687-.611a6 6 0 0 1 .561-.972l.873.29q.34-.426.766-.766l-.29-.873a6 6 0 0 1 .972-.561l.611.687a5 5 0 0 1 1.046-.28l.185-.901q.562-.054 1.123 0"
				transform="matrix(.29485 0 0 .29597 -182.902 29.21)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(.14083 0 0 -.27024 27.016 300.895)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.07041 .12242 .23316 -.13512 -55.587 179.893)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.07041 .12242 .23316 .13512 7.508 47.586)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(-.14083 0 0 .27024 153.207 36.28)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.07038 -.12244 -.2332 .13505 235.814 157.324)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.07041 -.12242 -.23316 -.13512 172.715 289.59)"
			/>
			<path
				class="precipitation"
				d="m827.705 439.53.185.901q.538.083 1.047.28l.61-.687q.514.233.973.561l-.29.873q.424.34.766.766l.872-.29q.327.459.562.972l-.688.611q.198.507.281 1.046l.9.185q.056.562 0 1.123l-.9.185a5 5 0 0 1-.281 1.047l.688.61a6 6 0 0 1-.562.973l-.872-.29a5 5 0 0 1-.766.766l.29.872a6 6 0 0 1-.973.562l-.61-.688a5 5 0 0 1-1.047.281l-.185.9a5.7 5.7 0 0 1-1.123 0l-.185-.9a5 5 0 0 1-1.046-.281l-.611.688a6 6 0 0 1-.972-.562l.29-.872a5 5 0 0 1-.766-.766l-.873.29a6 6 0 0 1-.561-.973l.687-.61a5 5 0 0 1-.28-1.047l-.901-.185a6 6 0 0 1 0-1.123l.901-.185q.083-.539.28-1.046l-.687-.611a6 6 0 0 1 .561-.972l.873.29q.34-.426.766-.766l-.29-.873a6 6 0 0 1 .972-.561l.611.687a5 5 0 0 1 1.046-.28l.185-.901q.562-.054 1.123 0"
				transform="matrix(.22443 0 0 .22528 -95.525 68.27)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(.14083 0 0 -.27024 51.975 290.32)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.07041 .12242 .23316 -.13512 -30.628 169.318)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.07041 .12242 .23316 .13512 32.467 37.011)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(-.14083 0 0 .27024 178.166 25.706)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.07038 -.12244 -.2332 .13505 260.772 146.75)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.07041 -.12242 -.23316 -.13512 197.674 279.015)"
			/>
			<path
				class="precipitation"
				d="m827.705 439.53.185.901q.538.083 1.047.28l.61-.687q.514.233.973.561l-.29.873q.424.34.766.766l.872-.29q.327.459.562.972l-.688.611q.198.507.281 1.046l.9.185q.056.562 0 1.123l-.9.185a5 5 0 0 1-.281 1.047l.688.61a6 6 0 0 1-.562.973l-.872-.29a5 5 0 0 1-.766.766l.29.872a6 6 0 0 1-.973.562l-.61-.688a5 5 0 0 1-1.047.281l-.185.9a5.7 5.7 0 0 1-1.123 0l-.185-.9a5 5 0 0 1-1.046-.281l-.611.688a6 6 0 0 1-.972-.562l.29-.872a5 5 0 0 1-.766-.766l-.873.29a6 6 0 0 1-.561-.973l.687-.61a5 5 0 0 1-.28-1.047l-.901-.185a6 6 0 0 1 0-1.123l.901-.185q.083-.539.28-1.046l-.687-.611a6 6 0 0 1 .561-.972l.873.29q.34-.426.766-.766l-.29-.873a6 6 0 0 1 .972-.561l.611.687a5 5 0 0 1 1.046-.28l.185-.901q.562-.054 1.123 0"
				transform="matrix(.22443 0 0 .22528 -70.567 57.694)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(.14083 0 0 -.27024 75.98 297.803)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.07041 .12242 .23316 -.13512 -6.623 176.802)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.07041 .12242 .23316 .13512 56.472 44.494)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(-.14083 0 0 .27024 202.17 33.189)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.07038 -.12244 -.2332 .13505 284.777 154.232)"
			/>
			<path
				class="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.07041 -.12242 -.23316 -.13512 221.679 286.497)"
			/>
			<path
				class="precipitation"
				d="m827.705 439.53.185.901q.538.083 1.047.28l.61-.687q.514.233.973.561l-.29.873q.424.34.766.766l.872-.29q.327.459.562.972l-.688.611q.198.507.281 1.046l.9.185q.056.562 0 1.123l-.9.185a5 5 0 0 1-.281 1.047l.688.61a6 6 0 0 1-.562.973l-.872-.29a5 5 0 0 1-.766.766l.29.872a6 6 0 0 1-.973.562l-.61-.688a5 5 0 0 1-1.047.281l-.185.9a5.7 5.7 0 0 1-1.123 0l-.185-.9a5 5 0 0 1-1.046-.281l-.611.688a6 6 0 0 1-.972-.562l.29-.872a5 5 0 0 1-.766-.766l-.873.29a6 6 0 0 1-.561-.973l.687-.61a5 5 0 0 1-.28-1.047l-.901-.185a6 6 0 0 1 0-1.123l.901-.185q.083-.539.28-1.046l-.687-.611a6 6 0 0 1 .561-.972l.873.29q.34-.426.766-.766l-.29-.873a6 6 0 0 1 .972-.561l.611.687a5 5 0 0 1 1.046-.28l.185-.901q.562-.054 1.123 0"
				transform="matrix(.22443 0 0 .22528 -46.562 65.177)"
			/>
		</Svg>
	);
};
