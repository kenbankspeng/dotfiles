import { Sun } from "./icons/sun.jsx";
import { Moon } from "./icons/moon.jsx";
import { CloudMoon } from "./icons/cloud-moon.jsx";
import { CloudSun } from "./icons/cloud-sun.jsx";
import { Cloud } from "./icons/cloud.jsx";
import { HeavyClouds } from "./icons/heavy-clouds.jsx";
import { SunShower } from "./icons/sun-shower.jsx";
import { Raindrop } from "./icons/raindrop.jsx";
import { Lightning } from "./icons/lightning.jsx";
import { HeavyRain } from "./icons/heavy-rain.jsx";
import { NightWind } from "./icons/night-wind.jsx";
import { LightWind } from "./icons/light-wind.jsx";
import { HeavyWind } from "./icons/heavy-wind.jsx";
import { LightSnow } from "./icons/light-snow.jsx";
import { LightShower } from "./icons/light-shower.jsx";
import { HeavySnow } from "./icons/heavy-snow.jsx";

// single command at refreshFrequency

// const weather_forecast =
// 	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&timezone=America%2FChicago";

const api =
	"https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.25&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FChicago";

export const getWeatherQuery = () => `curl --silent "${api}"`;

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

export const WeatherIcon = ({ weatherCode, ...rest }) => {
	switch (weatherCode) {
		case 0:
		case 1:
			return <Sun {...rest} />;
		case 2:
		case 3:
			return <Moon {...rest} />;
		case 45:
			return <CloudMoon {...rest} />;
		case 48:
			return <CloudSun {...rest} />;
		case 51:
			return <Cloud {...rest} />;
		case 53:
			return <HeavyClouds {...rest} />;
		case 55:
			return <SunShower {...rest} />;
		case 56:
			return <Raindrop {...rest} />;
		case 57:
			return <Lightning {...rest} />;
		case 61:
			return <HeavyRain {...rest} />;
		case 63:
			return <NightWind {...rest} />;
		case 65:
			return <LightWind {...rest} />;
		case 66:
			return <HeavyWind {...rest} />;
		case 67:
			return <LightSnow {...rest} />;
		case 71:
			return <LightShower {...rest} />;
		case 73:
			return <HeavySnow {...rest} />;
		case 75:
			return null;
		case 77:
			return null;
		case 80:
			return null;
		case 81:
			return null;
		case 82:
			return null;
		case 85:
			return null;
		case 86:
			return null;
		case 95:
			return null;
		case 96:
			return null;
		case 99:
			return null;
		default:
			return null;
	}
};
