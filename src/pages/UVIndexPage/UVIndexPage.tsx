import DefaultNewsSection from "@components/DefaultNewsSection/DefaultNewsSection";
import UVIndexSection from "./components/UVIndexSection/UVIndexSection";
import useMocks from "@services/useMocks";

const UVIndexPage = () => {
  const { getAllNews } = useMocks();
  const { newsForecast } = getAllNews;

  return (
    <>
      <UVIndexSection />
      <DefaultNewsSection news={newsForecast} />
    </>
  );
};

export default UVIndexPage;
