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

export const HeavySnow = (props) => {
	return (
		<Svg viewBox="0 0 200 200" {...props}>
			<title>Heavy Snow</title>
			<path
				className="cloud"
				d="M63.898 81.788c4.065-9.157 12.913-22.072 35.197-20.761 27.803 1.635 36.027 20.475 38.83 30.639 7.145.151 19.243 1.289 27.167 9.718 5.218 5.551 9.131 13.987 8.824 27.031-.294 12.469-11.774 26.563-24.142 29.85-3.772 1.003-2.046.815-8.001 1.59.463-1.8 1.281-4.159 1.323-5.929.063-2.661-.104-4.853-.368-7.146 3.566-.821.539-.25 3.223-.716 3.867-.671 15.3-11.324 15.478-18.879.198-8.413-2.686-13.088-6.052-16.668-7.815-8.314-14.76-6.575-20.145-6.735-1.997-.06-7.05-.045-7.05-.045s-.422-3.737-.577-5.581c0 0-2.997-23.542-29.046-25.074-11.026-.648-14.599 1.652-22.365 11.348-3.532-1.081-7.789-2.357-12.296-2.642"
				transform="translate(11.999 -51.94)scale(1.0399)"
			/>
			<path
				className="cloud"
				d="M59.694 92.473c2.238-10.8 13.266-32.983 39.401-31.446 27.803 1.635 36.027 20.475 38.83 30.639 7.145.151 19.243 1.289 27.167 9.718 5.218 5.551 9.131 13.987 8.824 27.031-.294 12.469-11.774 26.563-24.142 29.85-9.87 2.623-28.724 1.291-47.131.936-16.87-.325-33.365.48-42.224-.621-8.593-1.069-17.961-8.497-21.796-14.136-3.991-5.87-5.19-12.478-5.178-18.679.022-10.397 3.434-16.557 7.253-21.658 5.878-7.852 13.634-10.551 18.996-11.634m10.18 10.227c-7.902 1.07-13.874 1.4-19.208 8.526-2.468 3.297-4.633 7.931-4.647 14.651a20 20 0 0 0 3.426 11.166c2.429 3.574 8.09 8.711 13.527 9.226 7.742.733 23.272.409 39.359.564 17.324.166 35.095.906 43.62-.769 8.02-1.576 15.3-11.324 15.478-18.879.198-8.413-2.686-13.088-6.052-16.668-7.815-8.314-14.76-6.575-20.145-6.735-1.997-.06-7.05-.045-7.05-.045s-.422-3.737-.577-5.581c0 0-2.997-23.542-29.046-25.074-11.026-.648-18.547 5.237-22.365 11.348-4.146 6.636-3.834 6.406-4.887 9.451-.974 2.814-.948 6.219-1.433 8.819"
				transform="translate(-27.642 -24.875)scale(1.0399)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(.40623 0 0 -.77661 -62.784 548.118)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(.20311 .3518 .67256 -.3883 -301.062 200.386)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(-.20311 .3518 .67256 .3883 -119.057 -179.836)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(-.40623 0 0 .77661 301.225 -212.325)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(-.20302 -.35187 -.67267 .38811 539.512 135.526)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(.20311 -.3518 -.67256 -.3883 357.498 515.628)"
			/>
			<path
				className="precipitation"
				d="m827.705 439.53.185.901q.538.083 1.047.28l.61-.687q.514.233.973.561l-.29.873q.424.34.766.766l.872-.29q.327.459.562.972l-.688.611q.198.507.281 1.046l.9.185q.056.562 0 1.123l-.9.185a5 5 0 0 1-.281 1.047l.688.61a6 6 0 0 1-.562.973l-.872-.29a5 5 0 0 1-.766.766l.29.872a6 6 0 0 1-.973.562l-.61-.688a5 5 0 0 1-1.047.281l-.185.9a5.7 5.7 0 0 1-1.123 0l-.185-.9a5 5 0 0 1-1.046-.281l-.611.688a6 6 0 0 1-.972-.562l.29-.872a5 5 0 0 1-.766-.766l-.873.29a6 6 0 0 1-.561-.973l.687-.61a5 5 0 0 1-.28-1.047l-.901-.185a6 6 0 0 1 0-1.123l.901-.185q.083-.539.28-1.046l-.687-.611a6 6 0 0 1 .561-.972l.873.29q.34-.426.766-.766l-.29-.873a6 6 0 0 1 .972-.561l.611.687a5 5 0 0 1 1.046-.28l.185-.901q.562-.054 1.123 0"
				transform="translate(-416.268 -120.397)scale(.6474)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(.40623 0 0 -.77661 -154.128 547.158)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(.20311 .3518 .67256 -.3883 -392.405 199.426)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(-.20311 .3518 .67256 .3883 -210.4 -180.795)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(-.40623 0 0 .77661 209.882 -213.285)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(-.20302 -.35187 -.67267 .38811 448.169 134.567)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.406 10.862 22.008c0 3.136-4.867 5.682-10.862 5.682s-10.862-2.546-10.862-5.682c0-6.602 10.862-22.008 10.862-22.008"
				transform="matrix(.20311 -.3518 -.67256 -.3883 266.155 514.669)"
			/>
			<path
				className="precipitation"
				d="m827.705 439.53.185.901q.538.083 1.047.28l.61-.687q.514.233.973.561l-.29.873q.424.34.766.766l.872-.29q.327.459.562.972l-.688.611q.198.507.281 1.046l.9.185q.056.562 0 1.123l-.9.185a5 5 0 0 1-.281 1.047l.688.61a6 6 0 0 1-.562.973l-.872-.29a5 5 0 0 1-.766.766l.29.872a6 6 0 0 1-.973.562l-.61-.688a5 5 0 0 1-1.047.281l-.185.9a5.7 5.7 0 0 1-1.123 0l-.185-.9a5 5 0 0 1-1.046-.281l-.611.688a6 6 0 0 1-.972-.562l.29-.872a5 5 0 0 1-.766-.766l-.873.29a6 6 0 0 1-.561-.973l.687-.61a5 5 0 0 1-.28-1.047l-.901-.185a6 6 0 0 1 0-1.123l.901-.185q.083-.539.28-1.046l-.687-.611a6 6 0 0 1 .561-.972l.873.29q.34-.426.766-.766l-.29-.873a6 6 0 0 1 .972-.561l.611.687a5 5 0 0 1 1.046-.28l.185-.901q.562-.054 1.123 0"
				transform="translate(-507.611 -121.356)scale(.6474)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.48 10.862 22.114c0 3.078-4.867 5.576-10.862 5.576s-10.862-2.498-10.862-5.576c0-6.634 10.862-22.114 10.862-22.114"
				transform="matrix(.29146 0 0 -.5678 -56.088 448.145)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.367 10.862 21.954c0 3.166-4.867 5.736-10.862 5.736s-10.862-2.57-10.862-5.736c0-6.587 10.862-21.954 10.862-21.954"
				transform="matrix(.14573 .25722 .48255 -.2839 -227.047 193.906)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.367 10.862 21.954c0 3.166-4.867 5.736-10.862 5.736s-10.862-2.57-10.862-5.736c0-6.587 10.862-21.954 10.862-21.954"
				transform="matrix(-.14573 .25722 .48255 .2839 -96.462 -84.087)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.48 10.862 22.114c0 3.078-4.867 5.576-10.862 5.576s-10.862-2.498-10.862-5.576c0-6.634 10.862-22.114 10.862-22.114"
				transform="matrix(-.29146 0 0 .5678 205.08 -107.84)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.367 10.862 21.954c0 3.166-4.867 5.736-10.862 5.736s-10.862-2.57-10.862-5.736c0-6.587 10.862-21.954 10.862-21.954"
				transform="matrix(-.14566 -.25726 -.48263 .28376 376.047 146.485)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.367 10.862 21.954c0 3.166-4.867 5.736-10.862 5.736s-10.862-2.57-10.862-5.736c0-6.587 10.862-21.954 10.862-21.954"
				transform="matrix(.14573 -.25722 -.48255 -.2839 245.456 424.391)"
			/>
			<path
				className="precipitation"
				d="m827.705 439.53.185.901q.538.083 1.047.28l.61-.687q.514.233.973.561l-.29.873q.424.34.766.766l.872-.29q.327.459.562.972l-.688.611q.198.507.281 1.046l.9.185q.056.562 0 1.123l-.9.185a5 5 0 0 1-.281 1.047l.688.61a6 6 0 0 1-.562.973l-.872-.29a5 5 0 0 1-.766.766l.29.872a6 6 0 0 1-.973.562l-.61-.688a5 5 0 0 1-1.047.281l-.185.9a5.7 5.7 0 0 1-1.123 0l-.185-.9a5 5 0 0 1-1.046-.281l-.611.688a6 6 0 0 1-.972-.562l.29-.872a5 5 0 0 1-.766-.766l-.873.29a6 6 0 0 1-.561-.973l.687-.61a5 5 0 0 1-.28-1.047l-.901-.185a6 6 0 0 1 0-1.123l.901-.185q.083-.539.28-1.046l-.687-.611a6 6 0 0 1 .561-.972l.873.29q.34-.426.766-.766l-.29-.873a6 6 0 0 1 .972-.561l.611.687a5 5 0 0 1 1.046-.28l.185-.901q.562-.054 1.123 0"
				transform="matrix(.4645 0 0 .47333 -309.704 -40.629)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(.24669 0 0 -.47338 51.232 379.662)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.12334 .21444 .40842 -.23669 -93.465 167.703)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.12334 .21444 .40842 .23669 17.06 -64.06)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.421 10.862 22.03c0 3.124-4.867 5.66-10.862 5.66s-10.862-2.536-10.862-5.66c0-6.609 10.862-22.03 10.862-22.03"
				transform="matrix(-.24669 0 0 .47338 272.28 -83.864)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(-.12328 -.21448 -.40849 .23657 416.982 128.168)"
			/>
			<path
				className="precipitation"
				d="M448.033 489.592s10.862 15.398 10.862 21.998c0 3.141-4.867 5.692-10.862 5.692s-10.862-2.551-10.862-5.692c0-6.6 10.862-21.998 10.862-21.998"
				transform="matrix(.12334 -.21444 -.40842 -.23669 306.452 359.858)"
			/>
			<path
				className="precipitation"
				d="m827.705 439.53.185.901q.538.083 1.047.28l.61-.687q.514.233.973.561l-.29.873q.424.34.766.766l.872-.29q.327.459.562.972l-.688.611q.198.507.281 1.046l.9.185q.056.562 0 1.123l-.9.185a5 5 0 0 1-.281 1.047l.688.61a6 6 0 0 1-.562.973l-.872-.29a5 5 0 0 1-.766.766l.29.872a6 6 0 0 1-.973.562l-.61-.688a5 5 0 0 1-1.047.281l-.185.9a5.7 5.7 0 0 1-1.123 0l-.185-.9a5 5 0 0 1-1.046-.281l-.611.688a6 6 0 0 1-.972-.562l.29-.872a5 5 0 0 1-.766-.766l-.873.29a6 6 0 0 1-.561-.973l.687-.61a5 5 0 0 1-.28-1.047l-.901-.185a6 6 0 0 1 0-1.123l.901-.185q.083-.539.28-1.046l-.687-.611a6 6 0 0 1 .561-.972l.873.29q.34-.426.766-.766l-.29-.873a6 6 0 0 1 .972-.561l.611.687a5 5 0 0 1 1.046-.28l.185-.901q.562-.054 1.123 0"
				transform="matrix(.39314 0 0 .39462 -163.425 -27.83)"
			/>
		</Svg>
	);
};
