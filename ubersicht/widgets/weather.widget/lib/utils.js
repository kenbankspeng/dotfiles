export function injectStyles(id, styles = []) {
	const existingStyles = document.getElementById(id);
	// Merge all styles and minify them
	const stylesToInject = styles.join("").replace(/\s+/g, " ");
	if (existingStyles) {
		existingStyles.innerHTML = stylesToInject;
		return;
	}
	document.head.appendChild(
		Object.assign(document.createElement("style"), {
			id,
			innerHTML: stylesToInject,
		}),
	);
}
