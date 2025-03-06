import { styled } from "uebersicht";
import { colors } from "../weather-type/theme.js";

const Svg = styled("svg")`
  display: block;

  .scale {
    fill: ${colors.surface2};
  }
  .gradient-hot {
    fill: url(#a);
  }
  .gradient-warm {
    fill: url(#b);
  }
  .gradient-cold {
    fill: url(#c);
  }
`;

export const Temperature = (props) => {
	return (
		<Svg viewBox="0 0 86 222" {...props}>
			<title>Temperature</title>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-264.736 -476.728)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-264.576 -446.728)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -165.206 -491.728)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -165.366 -461.728)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -165.206 -551.337)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -165.366 -521.728)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -165.206 -581.695)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-264.736 -506.728)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-264.736 -537.762)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-264.576 -566.762)"
			/>
			<path
				className="scale"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-264.576 -596.728)"
			/>
			<path
				className="scale"
				d="M319.93 615.367c6.465 4.994 10.631 12.822 10.631 21.615 0 15.067-12.233 27.3-27.3 27.3s-27.3-12.233-27.3-27.3c0-8.559 3.947-16.203 10.118-21.21l.525-152.953c.029-8.173 7.562-14.94 16.975-14.916 9.415.024 16.903 6.832 16.875 15.007zm-4.048 1.007.527-153.478c.021-6.108-5.805-10.93-12.841-10.949-7.037-.018-12.898 4.776-12.919 10.886l-.529 153.935a2.02 2.02 0 0 1-.807 1.61c-5.65 4.245-9.307 11-9.307 18.604 0 12.835 10.42 23.255 23.255 23.255s23.255-10.42 23.255-23.255c0-7.816-3.865-14.736-9.785-18.954a2.02 2.02 0 0 1-.849-1.654"
				transform="translate(-266.932 -442.986)scale(.98902)"
			/>
			<path
				className="gradient-hot"
				d="M78.333 600.664v-18.333A6.67 6.67 0 0 1 85 575.664a6.67 6.67 0 0 1 6.667 6.667v18.333z"
				transform="matrix(1.2 0 0 1.2 -69 -681.796)"
			/>
			<path
				className="gradient-warm"
				d="M91.667 650.664v60.897C96.604 714.018 100 719.115 100 725c0 8.279-6.721 15-15 15s-15-6.721-15-15c0-5.885 3.396-10.982 8.333-13.439v-60.897z"
				transform="matrix(1.2 0 0 1.18653 -69 -673.033)"
			/>
			<path
				className="gradient-cold"
				d="M120 700h16v60h-16z"
				transform="translate(-95 -661)"
			/>
			<defs>
				<linearGradient
					id="a"
					x1="0"
					x2="1"
					y1="0"
					y2="0"
					gradientTransform="matrix(0 -22.9675 43.064 0 85 600.664)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" style={{ stopColor: "#ff7d5b", stopOpacity: 1 }} />
					<stop offset="1" style={{ stopColor: "#6c021e", stopOpacity: 1 }} />
				</linearGradient>
				<linearGradient
					id="b"
					x1="0"
					x2="1"
					y1="0"
					y2="0"
					gradientTransform="matrix(0 89.3361 -266.031 0 85 650.664)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" style={{ stopColor: "#1d4273", stopOpacity: 1 }} />
					<stop offset="1" style={{ stopColor: "#08ffff", stopOpacity: 1 }} />
				</linearGradient>
				<linearGradient
					id="c"
					x1="0"
					x2="1"
					y1="0"
					y2="0"
					gradientTransform="matrix(0 -60 225 0 128 760)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" style={{ stopColor: "#0f0", stopOpacity: 1 }} />
					<stop offset="1" style={{ stopColor: "#046b01", stopOpacity: 1 }} />
				</linearGradient>
			</defs>
		</Svg>
	);
};
