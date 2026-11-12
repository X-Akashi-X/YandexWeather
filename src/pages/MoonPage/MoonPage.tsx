import DefaultNewsSection from "@components/DefaultNewsSection/DefaultNewsSection";
import MoonSection from "./components/MoonSection/MoonSection";
import useMocks from "@services/useMocks";

const MoonPage = () => {
  const { getAllNews } = useMocks();
  const { newsAstronomy } = getAllNews;

  return (
    <>
      <MoonSection />
      <DefaultNewsSection news={newsAstronomy} />
    </>
  );
};

export default MoonPage;
