import LifestyleForecast from "@components/LifestyleForecast/LifestyleForecast";
import MainInfoSection from "../components/MainInfoSection/MainInfoSection";
import WeatherMap from "../components/WeatherMap/WeatherMap";

const MainPage = () => {
  return (
    <>
      <WeatherMap />
      <MainInfoSection />
      <LifestyleForecast />
    </>
  );
};

export default MainPage;
