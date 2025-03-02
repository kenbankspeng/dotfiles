import { styled } from "uebersicht";
import { colors } from "../theme.js";

const Svg = styled("svg")`
  display: block;
	.sun {
    fill: ${colors.yellow};
  }
  .sunray {
    fill: ${colors.yellow};
  }
`;

export const Sun = (props) => {
	const Sunray = (props) => (
		<path
			className="sunray"
			d="m93.516 33.513-.039-16s.032-2.088.472-3c.481-1 1.473-2.378 2.418-3 1.175-.774 2.495-1.206 3.795-1.178s2.959.651 4 1.347c1.001.67 1.794 1.859 2.245 2.831.425.918.46 3 .46 3l-.005 16s-.062 1.429-.61 2.701c-.428.995-1.284 1.817-1.774 2.299-1.094 1.074-2.874 1.585-4.316 1.585-1.443 0-3.246-.501-4.339-1.585-.487-.482-1.389-1.421-1.802-2.416-.527-1.272-.505-2.584-.505-2.584"
			{...props}
		/>
	);

	return (
		<Svg viewBox="0 0 200 200" {...props}>
			<title>Sun</title>
			<circle
				className="sun"
				cx="321.82"
				cy="103.26"
				r="34.642"
				transform="matrix(1.13837 -.00057 .00057 1.13836 -266.41 -17.365)"
			/>
			<Sunray transform="translate(20.993 19.996)scale(.7887)" />
			<Sunray transform="matrix(.68304 -.39435 .39435 .68303 -8.424 70.217)" />
			<Sunray transform="matrix(.39435 -.68303 .68304 .39435 -8.79 128.419)" />
			<Sunray transform="rotate(-90 99.5 79.505)scale(.7887)" />
			<Sunray transform="matrix(-.39435 -.68303 .68304 -.39435 70.217 208.423)" />
			<Sunray transform="matrix(-.68304 -.39435 .39435 -.68303 128.419 208.789)" />
			<Sunray transform="rotate(180 89.503 90.002)scale(.7887)" />
			<Sunray transform="matrix(-.68304 .39435 -.39435 -.68303 208.423 129.782)" />
			<Sunray transform="matrix(-.39435 .68303 -.68304 -.39435 208.788 71.58)" />
			<Sunray transform="rotate(90 79.505 100.499)scale(.7887)" />
			<Sunray transform="matrix(.39435 .68303 -.68304 .39435 129.783 -8.423)" />
			<Sunray transform="matrix(.68304 .39435 -.39435 .68303 71.58 -8.788)" />
		</Svg>
	);
};
