import { styled } from "uebersicht";
import { Clouds, Wind } from "./lib/icons.jsx";

const Cell = styled("div")`
	background: red;
`;

// Lightning, Sun,
// weather.current.temperature_2m
export const Weather = () => {
	return (
		<Cell>
			<Clouds />
			<Wind />
		</Cell>
	);
};
