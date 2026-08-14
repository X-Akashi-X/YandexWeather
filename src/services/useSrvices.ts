import useAirQuality from "../hooks/useAirQuality";
import useForecast from "../hooks/useForecast";
import { useMemo } from "react";
import {
  currentData,
  todayData,
  tomorrowData,
  weekData,
  weekendData,
  tenDaysData,
  timeLineData,
  advancedDaysData,
  yesterdayData,
} from "./WeatherMappers";

const useServices = () => {
  const { dataForecast } = useForecast();
  const { dataAirQuality } = useAirQuality();

  const advancedWeather = useMemo(() => {
    if (!dataForecast) return { tenDays: [], oneDay: null };
    return advancedDaysData(dataForecast);
  }, [dataForecast]);

  return useMemo(() => {
    const isForecastAndAir = dataForecast && dataAirQuality;

    return {
      getCurrentData: isForecastAndAir
        ? currentData(dataForecast, dataAirQuality)
        : null,
      getTodayData: dataForecast ? todayData(dataForecast) : null,
      getTomorrowData: dataForecast ? tomorrowData(dataForecast) : null,
      getYesterdayData: dataForecast ? yesterdayData(dataForecast) : null,
      getWeekData: dataForecast ? weekData(dataForecast) : null,
      getWeekendData: dataForecast ? weekendData(dataForecast) : null,
      getTenDaysData: dataForecast ? tenDaysData(dataForecast) : null,
      getTimeLineData: dataForecast ? timeLineData(dataForecast) : null,
      getAdvancedTenDaysData: advancedWeather.tenDays,
      getAdvancedOneDayData: advancedWeather.oneDay,
    };
  }, [dataForecast, dataAirQuality, advancedWeather]);
};

export default useServices;
