import { styled } from "uebersicht";

const Canvas = styled("canvas")`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
`;

const createParticles = (w, h) => {
	const maxParts = 1000;
	return Array.from({ length: maxParts }, () => ({
		x: Math.random() * w,
		y: Math.random() * h,
		l: Math.random() * 1,
		xs: -4 + Math.random() * 4 + 2,
		ys: Math.random() * 10 + 10,
	}));
};

const draw = (ctx, particles, w, h) => {
	ctx.clearRect(0, 0, w, h);
	for (const p of particles) {
		ctx.beginPath();
		ctx.moveTo(p.x, p.y);
		ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
		ctx.stroke();
	}

	// Move particles
	for (const p of particles) {
		p.x += p.xs;
		p.y += p.ys;
		if (p.x > w || p.y > h) {
			p.x = Math.random() * w;
			p.y = -20;
		}
	}
};

const setupCanvas = (state) => {
	const canvas = document.getElementById("rain-canvas");
	if (!canvas) return state;

	const ctx = canvas.getContext("2d");
	if (!ctx) return state;

	canvas.width = state.width;
	canvas.height = state.height;
	ctx.strokeStyle = "rgba(174,194,224,0.5)";
	ctx.lineWidth = 1;
	ctx.lineCap = "round";

	return {
		...state,
		ctx,
		particles: createParticles(state.width, state.height),
	};
};

const Rain = ({ state, dispatch }) => {
	if (!state.ctx) {
		dispatch({ type: "SETUP_RAIN", setupCanvas });
	} else if (state.isRaining) {
		draw(state.ctx, state.particles, state.width, state.height);
		dispatch({ type: "ANIMATE_RAIN" });
	}

	return <Canvas id="rain-canvas" />;
};

export default Rain;
