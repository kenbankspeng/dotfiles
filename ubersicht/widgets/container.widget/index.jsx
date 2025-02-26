import { styled } from "uebersicht"; // run, css

export const className = `
	box-sizing: border-box;
	display: flex;
	padding: 100px;
	width: 100%;

	color: white;
	font-family: Helvetica;
	font-size: 20px;
	font-weight: bold;
	z-index: 1;
	border: 5px solid red;
`;

const Grid = styled("div")`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	width: 100%;
`;

const Cell = styled("div")`
	border: 1px solid red;
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
