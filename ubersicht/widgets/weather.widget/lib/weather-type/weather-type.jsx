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

export const getWeatherType = ({ weatherCode }) => {
	let Icon = () => <div />;
	let desc = "";

	switch (weatherCode) {
		case 0: // Clear sky
			Icon = (props) => <Sun {...props} />;
			desc = "Clear sky";
			break;
		case 1: // Mainly clear
			Icon = (props) => <CloudSun {...props} />;
			desc = "Mainly clear";
			break;
		case 2: // Partly cloudy
			Icon = (props) => <Cloud {...props} />;
			desc = "Partly cloudy";
			break;
		case 3: // Overcast
			Icon = (props) => <HeavyClouds {...props} />;
			desc = "Overcast";
			break;
		case 45: // Fog
			desc = "Fog";
			break;
		case 48: // depositing rime fog
			desc = "Fog with rime";
			break;
		case 51: // Drizzle: Light
			desc = "Light drizzle";
			break;
		case 53: // Drizzle: moderate
			desc = "Moderate drizzle";
			break;
		case 55: // Drizzle: dense
			desc = "Dense drizzle";
			break;
		case 56: // Freezing Drizzle: Light
			Icon = (props) => <FreezingRain {...props} />;
			desc = "Light freezing drizzle";
			break;
		case 57: // Freezing Drizzle: dense
			Icon = (props) => <HeavyFreezingRain {...props} />;
			desc = "Dense freezing drizzle";
			break;
		case 61: // Rain: Slight
			Icon = (props) => <LightRain {...props} />;
			desc = "Light rain";
			break;
		case 63: // Rain: moderate
			Icon = (props) => <LightRain {...props} />;
			desc = "Moderate rain";
			break;
		case 65: // Rain: heavy
			Icon = (props) => <HeavyRain {...props} />;
			desc = "Heavy rain";
			break;
		case 66: // Freezing Rain: Light
			Icon = (props) => <FreezingRain {...props} />;
			desc = "Light freezing Rain";
			break;
		case 67: // Freezing Rain: heavy
			Icon = (props) => <HeavyFreezingRain {...props} />;
			desc = "Heavy freezing rain";
			break;
		case 71: // Snow fall: Slight
			Icon = (props) => <LightSnow {...props} />;
			desc = "Light snow fall";
			break;
		case 73: // Snow fall: moderate
			Icon = (props) => <LightSnow {...props} />;
			desc = "Moderate snow fall";
			break;
		case 75: // Snow fall: heavy
			Icon = (props) => <HeavySnow {...props} />;
			desc = "Heavy snow fall";
			break;
		case 77: // Snow grains
			desc = "Snow grains";
			break;
		case 80: // Rain showers: Slight
			Icon = (props) => <LightShowers {...props} />;
			desc = "Light showers";
			break;
		case 81: // Rain showers: moderate
			Icon = (props) => <LightShowers {...props} />;
			desc = "Moderate showers";
			break;
		case 82: // Rain showers: violent
			Icon = (props) => <HeavyShowers {...props} />;
			desc = "Violent showers";
			break;
		case 85: // Snow showers slight
			Icon = (props) => <LightSnow {...props} />;
			desc = "Light snow";
			break;
		case 86: // Snow showers heavy
			Icon = (props) => <HeavySnow {...props} />;
			desc = "Heavy snow";
			break;
		case 95: // Thunderstorm: Slight or moderate
			Icon = (props) => <ThunderStorm {...props} />;
			desc = "Moderate thunderstorm";
			break;
		case 96: // Thunderstorm with slight hail
			Icon = (props) => <ThunderStorm {...props} />;
			desc = "Thunderstorm with light hail";
			break;
		case 99: // Thunderstorm with heavy hail
			Icon = (props) => <ThunderStorm {...props} />;
			desc = "Thunderstorm with heavy hail";
			break;
	}
	return { Icon, desc };
};
