import DefaultNewsSection from "@components/DefaultNewsSection/DefaultNewsSection";
import MagneticSection from "./components/MagneticSection/MagneticSection";
import useMocks from "@services/useMocks";

const MagneticFieldPage = () => {
  const { getAllNews } = useMocks();
  const { newsMagnetic } = getAllNews;

  return (
    <>
      <MagneticSection />
      <DefaultNewsSection news={newsMagnetic} />
    </>
  );
};

export default MagneticFieldPage;
