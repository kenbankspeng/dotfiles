export const widgetStyle = (x, y, w, h, style) => {
	return `
	${x && `left: ${x}px;`}
	${y && `top: ${y}px;`}
	${w && `width: ${w}px;`}
	${h && `height: ${h}px;`}
	overflow: hidden;

	${style}
`;
};
