export const widgetStyle = (size, style) => {
	const [left, top, width, height] = size;

	return `
  color: #cdd6f4;
	font-family: Helvetica;
	font-size: 20px;
	font-weight: bold;
	z-index: 1;

	${left && `left: ${left}px;`}
	${top && `top: ${top}px;`}
	${width && `width: ${width}px;`}
	${height && `height: ${height}px;`}

	${style}
`;
};
