// WMO Weather Code
// weather_code		Description
// 0						Clear sky
// 1, 2, 3			Mainly clear, partly cloudy, and overcast
// 45, 48				Fog and depositing rime fog
// 51, 53, 55		Drizzle: Light, moderate, and dense intensity
// 56, 57				Freezing Drizzle: Light and dense intensity
// 61, 63, 65		Rain: Slight, moderate and heavy intensity
// 66, 67				Freezing Rain: Light and heavy intensity
// 71, 73, 75		Snow fall: Slight, moderate, and heavy intensity
// 77						Snow grains
// 80, 81, 82		Rain showers: Slight, moderate, and violent
// 85, 86				Snow showers slight and heavy
// 95 *					Thunderstorm: Slight or moderate
// 96, 99 *			Thunderstorm with slight and heavy hail

import { Sun } from "./icons/sun.jsx";
import { CloudSun } from "./icons/cloud-sun.jsx";
import { Cloud } from "./icons/cloud.jsx";
import { HeavyClouds } from "./icons/heavy-clouds.jsx";
import { ThunderStorm } from "./icons/thunder-storm.jsx";
import { HeavyRain } from "./icons/heavy-rain.jsx";
import { LightSnow } from "./icons/light-snow.jsx";
import { LightRain } from "./icons/light-rain.jsx";
import { HeavySnow } from "./icons/heavy-snow.jsx";
import { LightShowers } from "./icons/light-showers.jsx";
import { HeavyShowers } from "./icons/heavy-showers.jsx";
import { FreezingRain } from "./icons/freezing-rain.jsx";
import { HeavyFreezingRain } from "./icons/heavy-freezing-rain.jsx";

// import { Moon } from "./icons/moon.jsx";
// import { CloudMoon } from "./icons/cloud-moon.jsx";
// import { SunShower } from "./icons/sun-shower.jsx";
// import { Raindrop } from "./icons/raindrop.jsx";
// import { Wind } from "./icons/wind.jsx";

export const DecodeWeather = ({ weatherCode, ...rest }) => {
	switch (weatherCode) {
		case 0: // Clear sky
			return <Sun {...rest} />;
		case 1: // Mainly clear
			return <CloudSun {...rest} />;
		case 2: // Partly cloudy
			return <Cloud {...rest} />;
		case 3: // Overcast
			return <HeavyClouds {...rest} />;
		case 45: // Fog
			return;
		case 48: // depositing rime fog
			return;
		case 51: // Drizzle: Light
			return;
		case 53: // Drizzle: moderate
			return;
		case 55: // Drizzle: dense
			return;
		case 56: // Freezing Drizzle: Light
			return <FreezingRain {...rest} />;
		case 57: // Freezing Drizzle: dense
			return <HeavyFreezingRain {...rest} />;
		case 61: // Rain: Slight
			return <LightRain {...rest} />;
		case 63: // Rain: moderate
			return <LightRain {...rest} />;
		case 65: // Rain: heavy
			return <HeavyRain {...rest} />;
		case 66: // Freezing Rain: Light
			return <FreezingRain {...rest} />;
		case 67: // Freezing Rain: heavy
			return <HeavyFreezingRain {...rest} />;
		case 71: // Snow fall: Slight
			return <LightSnow {...rest} />;
		case 73: // Snow fall: moderate
			return <LightSnow {...rest} />;
		case 75: // Snow fall: heavy
			return <HeavySnow {...rest} />;
		case 77: // Snow grains
			return;
		case 80: // Rain showers: Slight
			return <LightShowers {...rest} />;
		case 81: // Rain showers: moderate
			return <LightShowers {...rest} />;
		case 82: // Rain showers: violent
			return <HeavyShowers {...rest} />;
		case 85: // Snow showers slight
			return <LightSnow {...rest} />;
		case 86: // Snow showers heavy
			return <HeavySnow {...rest} />;
		case 95: // Thunderstorm: Slight or moderate
			return <ThunderStorm {...rest} />;
		case 96: // Thunderstorm with slight hail
			return <ThunderStorm {...rest} />;
		case 99: // Thunderstorm with heavy hail
			return <ThunderStorm {...rest} />;
		default:
			return;
	}
};
