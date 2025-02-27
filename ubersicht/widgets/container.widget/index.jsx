import { styled } from "uebersicht"; // run, css

const DEBUG = true;

const H_MARGIN = "150px";
const V_MARGIN = "40px";

export const className = `
	/* reset */
	* {
		box-sizing: border-box;
	}

	/* container */
	display: flex;
	margin-left:20px;
	width: calc(100% - ${H_MARGIN});
	height: calc(100% - ${V_MARGIN});
	overflow: hidden;

	color: white;
	font-family: Helvetica;
	font-size: 20px;
	font-weight: bold;
	z-index: 1;
	${DEBUG && "border: 5px solid red;"}
`;

const Grid = styled("div")`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	width: 100%;
	height: 100%;
	padding: 100px;
`;

const Cell = styled("div")`
	${DEBUG && "border: 5px solid red;"}
`;

export const render = ({ output, error }, dispatch) => {
	return (
		<Grid>
			<Cell>Cell 1</Cell>
			<Cell>Cell 2</Cell>
			<Cell>Cell 3</Cell>
		</Grid>
	);
};
