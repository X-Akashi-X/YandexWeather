export type TimeOfDayItems = {
  temp: string;
  effect: string;
  info: string;
  apparentTemp: string;
  windSpeed: number;
  windDirection: number;
  windDirectionText: string;
  humidity: number;
  pressure: number;
};

export type LifestyleLinkItems = {
  link: string;
  icon: string;
  title: string;
};

export type CurrentWeatherEffectDetails = {
  currentWindSpeed: number;
  currentWindDirection: string;
  currentPressure: number;
  currentHumidity: number;
  currentWaterTemperature: string;
};

export type EffectDetailsItems = {
  icon: string;
  text: string;
  alt: string;
};
