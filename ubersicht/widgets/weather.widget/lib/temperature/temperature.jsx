import { styled } from "uebersicht";
import { colors } from "../weather-type/theme.js";

const Svg = styled("svg")`
  display: block;

  .scale {
    fill: ${colors.surface2};
  }
  .gradient {
    fill: url(#a);
  }
`;

export const Temperature = (props) => {
	return (
		<Svg viewBox="0 0 86 222" {...props}>
			<title>Temperature</title>
			<path
				className="scale"
				d="M319.93 615.367c6.465 4.994 10.631 12.822 10.631 21.615 0 15.067-12.233 27.3-27.3 27.3s-27.3-12.233-27.3-27.3c0-8.559 3.947-16.203 10.118-21.21l.525-152.953c.029-8.173 7.562-14.94 16.975-14.916 9.415.024 16.903 6.832 16.875 15.007zm-4.048 1.007.527-153.478c.021-6.108-5.805-10.93-12.841-10.949-7.037-.018-12.898 4.776-12.919 10.886l-.529 153.935a2.02 2.02 0 0 1-.807 1.61c-5.65 4.245-9.307 11-9.307 18.604 0 12.835 10.42 23.255 23.255 23.255s23.255-10.42 23.255-23.255c0-7.816-3.865-14.736-9.785-18.954a2.02 2.02 0 0 1-.849-1.654"
				transform="translate(-268.932 -437.99)scale(.98902)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.416 -591.262)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -169.046 -576.228)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.416 -561.295)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -169.046 -545.87)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.576 -532.295)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -169.206 -516.262)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.576 -501.262)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -169.046 -486.262)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.576 -471.262)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -169.206 -456.262)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.416 -441.262)"
			/>

			<path
				className="gradient"
				d="M91.667 711.561C96.604 714.018 100 719.115 100 725c0 8.279-6.721 15-15 15s-15-6.721-15-15c0-5.885 3.396-10.982 8.333-13.439v-129.23A6.67 6.67 0 0 1 85 575.664a6.67 6.67 0 0 1 6.667 6.667z"
				transform="matrix(1.2 0 0 1.2 -71 -678)"
			/>
			<defs>
				<linearGradient
					id="a"
					x1="0"
					x2="1"
					y1="0"
					y2="0"
					gradientTransform="matrix(0 164.336 -239.809 0 85 575.664)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" style={{ stopColor: "#ac1900", stopOpacity: "1" }} />
					<stop
						offset=".07"
						style={{ stopColor: "#b12200", stopOpacity: "1" }}
					/>
					<stop
						offset=".13"
						style={{ stopColor: "#c33e00", stopOpacity: "1" }}
					/>
					<stop
						offset=".21"
						style={{ stopColor: "#036b00", stopOpacity: "1" }}
					/>
					<stop
						offset=".39"
						style={{ stopColor: "#399337", stopOpacity: "1" }}
					/>
					<stop
						offset=".51"
						style={{ stopColor: "#26426f", stopOpacity: "1" }}
					/>
					<stop
						offset=".74"
						style={{ stopColor: "#387398", stopOpacity: "1" }}
					/>
					<stop offset="1" style={{ stopColor: "#65f1ff", stopOpacity: "1" }} />
				</linearGradient>
			</defs>
		</Svg>
	);
};
