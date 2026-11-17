import DefaultNewsSection from "@components/DefaultNewsSection/DefaultNewsSection";
import PressureSection from "./components/PressureSection/PressureSection";
import useMocks from "@services/useMocks";

const PressurePage = () => {
  const { getAllNews } = useMocks();
  const { newsPressure } = getAllNews;

  return (
    <>
      <PressureSection />
      <DefaultNewsSection news={newsPressure} />
    </>
  );
};

export default PressurePage;
