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
  monthlyData,
} from "./mappers/weatherMappers";
import type { AdvancedWeather } from "@ts/weather";
import {
  DEFAULT_CURRENT_DAY,
  DEFAULT_ONE_DAY,
  DEFAULT_TODAY,
  DEFAULT_TOMORROW,
  DEFAULT_WEEK,
  DEFAULT_WEEKEND,
  DEFAULT_YESTERDAY,
} from "@constants/weather";

const useServices = () => {
  const { dataForecast } = useForecast();
  const { dataAirQuality } = useAirQuality();
  const { dataArhive } = useArhive();

  const advancedWeather = useMemo<AdvancedWeather>(() => {
    if (!dataForecast) return { tenDays: [], oneDay: DEFAULT_ONE_DAY };
    return advancedDaysData(dataForecast);
  }, [dataForecast]);

  return useMemo(() => {
    const isForecastAndAir = dataForecast && dataAirQuality;

    return {
      getCurrentData: isForecastAndAir
        ? currentData(dataForecast, dataAirQuality)
        : DEFAULT_CURRENT_DAY,
      getTodayData: dataForecast ? todayData(dataForecast) : DEFAULT_TODAY,
      getTomorrowData: dataForecast
        ? tomorrowData(dataForecast)
        : DEFAULT_TOMORROW,
      getYesterdayData: dataForecast
        ? yesterdayData(dataForecast)
        : DEFAULT_YESTERDAY,
      getWeekData: dataForecast ? weekData(dataForecast) : DEFAULT_WEEK,
      getWeekendData: dataForecast
        ? weekendData(dataForecast)
        : DEFAULT_WEEKEND,
      getTenDaysData: dataForecast ? tenDaysData(dataForecast) : [],
      getMontlyData: dataArhive ? monthlyData(dataArhive) : [],
      getTimeLineData: dataForecast ? timeLineData(dataForecast) : [],
      getAdvancedTenDaysData: advancedWeather.tenDays,
      getAdvancedOneDayData: advancedWeather.oneDay,
    };
  }, [dataForecast, dataAirQuality, dataArhive, advancedWeather]);
};

export default useServices;
