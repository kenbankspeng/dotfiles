export const widgetStyle = (x, y, w, h, style) => {
	return `
  color: #cdd6f4;
	font-family: Helvetica;
	font-size: 20px;
	font-weight: bold;
	z-index: 1;

	${x && `left: ${x}px;`}
	${y && `top: ${y}px;`}
	${w && `width: ${w}px;`}
	${h && `height: ${h}px;`}
	overflow: hidden;

	${style}
`;
};
