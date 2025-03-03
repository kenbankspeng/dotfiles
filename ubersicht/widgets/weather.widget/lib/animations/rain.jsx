import { styled } from "uebersicht";

const Canvas = styled("canvas")`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
`;

export const createParticles = (w, h) => {
	const maxParts = 1000;
	return Array.from({ length: maxParts }, () => ({
		x: Math.random() * w,
		y: Math.random() * h,
		l: Math.random() * 1,
		xs: -4 + Math.random() * 4 + 2,
		ys: Math.random() * 10 + 10,
	}));
};

export const draw = (ctx, particles, w, h) => {
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

const Rain = () => {
	return <Canvas id="rain-canvas" />;
};

export default Rain;
