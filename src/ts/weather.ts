export type PeriodData = {
  temp: number;
  feels: number;
  windSpeed: number;
  windDeg: number;
  humidity: number;
  pressure: number;
  weatherCode: number;
};

export type DayGroups = {
  morning: PeriodData[];
  day: PeriodData[]; 
  evening: PeriodData[];
  night: PeriodData[];
};