import { styled } from "uebersicht";
import { colors } from "../theme.js";

const Svg = styled("svg")`
  display: block;
	.cloud {
    fill: ${colors.text};
  }
`;

export const HeavyClouds = (props) => {
	return (
		<Svg viewBox="0 0 200 200" {...props}>
			<title>Heavy Clouds</title>
			<path
				class="cloud"
				d="M63.898 81.788c4.065-9.157 12.913-22.072 35.197-20.761 27.803 1.635 36.027 20.475 38.83 30.639 7.145.151 19.243 1.289 27.167 9.718 5.218 5.551 9.131 13.987 8.824 27.031-.294 12.469-11.774 26.563-24.142 29.85-3.772 1.003-2.046.815-8.001 1.59.463-1.8 1.281-4.159 1.323-5.929.063-2.661-.104-4.853-.368-7.146 3.566-.821.539-.25 3.223-.716 3.867-.671 15.3-11.324 15.478-18.879.198-8.413-2.686-13.088-6.052-16.668-7.815-8.314-14.76-6.575-20.145-6.735-1.997-.06-7.05-.045-7.05-.045s-.422-3.737-.577-5.581c0 0-2.997-23.542-29.046-25.074-11.026-.648-14.599 1.652-22.365 11.348-3.532-1.081-7.789-2.357-12.296-2.642"
				transform="translate(11.995 -28.331)scale(1.0399)"
			/>
			<path
				class="cloud"
				d="M59.694 92.473c2.238-10.8 13.266-32.983 39.401-31.446 27.803 1.635 36.027 20.475 38.83 30.639 7.145.151 19.243 1.289 27.167 9.718 5.218 5.551 9.131 13.987 8.824 27.031-.294 12.469-11.774 26.563-24.142 29.85-9.87 2.623-28.724 1.291-47.131.936-16.87-.325-33.365.48-42.224-.621-8.593-1.069-17.961-8.497-21.796-14.136-3.991-5.87-5.19-12.478-5.178-18.679.022-10.397 3.434-16.557 7.253-21.658 5.878-7.852 13.634-10.551 18.996-11.634m10.18 10.227c-7.902 1.07-13.874 1.4-19.208 8.526-2.468 3.297-4.633 7.931-4.647 14.651a20 20 0 0 0 3.426 11.166c2.429 3.574 8.09 8.711 13.527 9.226 7.742.733 23.272.409 39.359.564 17.324.166 35.095.906 43.62-.769 8.02-1.576 15.3-11.324 15.478-18.879.198-8.413-2.686-13.088-6.052-16.668-7.815-8.314-14.76-6.575-20.145-6.735-1.997-.06-7.05-.045-7.05-.045s-.422-3.737-.577-5.581c0 0-2.997-23.542-29.046-25.074-11.026-.648-18.547 5.237-22.365 11.348-4.146 6.636-3.834 6.406-4.887 9.451-.974 2.814-.948 6.219-1.433 8.819"
				transform="translate(-27.646 -1.266)scale(1.0399)"
			/>
		</Svg>
	);
};
