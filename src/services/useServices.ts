import useAirQuality from "@hooks/useAirQuality";
import useForecast from "@hooks/useForecast";
import useArhive from "@hooks/useArchive";
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
  montlyData,
} from "./mappers/weatherMappers";
import type { AdvancedWeather } from "@ts/weather";
import { defaultOneDay } from "@constants/weather";

const useServices = () => {
  const { dataForecast } = useForecast();
  const { dataAirQuality } = useAirQuality();
  const { dataArhive } = useArhive();

  const advancedWeather = useMemo<AdvancedWeather>(() => {
    if (!dataForecast) return { tenDays: [], oneDay: defaultOneDay };
    return advancedDaysData(dataForecast);
  }, [dataForecast]);

  return useMemo(() => {
    const isForecastAndAir = dataForecast && dataAirQuality;

    return {
      getCurrentData: isForecastAndAir
        ? currentData(dataForecast, dataAirQuality)
        : {},
      getTodayData: dataForecast ? todayData(dataForecast) : {},
      getTomorrowData: dataForecast ? tomorrowData(dataForecast) : {},
      getYesterdayData: dataForecast ? yesterdayData(dataForecast) : {},
      getWeekData: dataForecast ? weekData(dataForecast) : {},
      getWeekendData: dataForecast ? weekendData(dataForecast) : {},
      getTenDaysData: dataForecast ? tenDaysData(dataForecast) : [],
      getMontlyData: dataArhive ? montlyData(dataArhive) : [],
      getTimeLineData: dataForecast ? timeLineData(dataForecast) : [],
      getAdvancedTenDaysData: advancedWeather.tenDays,
      getAdvancedOneDayData: advancedWeather.oneDay,
    };
  }, [dataForecast, dataAirQuality, dataArhive, advancedWeather]);
};

export default useServices;
