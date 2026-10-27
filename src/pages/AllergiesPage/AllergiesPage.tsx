import useMocks from "@services/useMocks";
import AllergiesSection from "./components/AllergiesSection/AllergiesSection";
import DefaultNewsSection from "@components/DefaultNewsSection/DefaultNewsSection";

const AllergiesPage = () => {
  const { getAllNews } = useMocks();
  const { newsAllergies } = getAllNews;

  return (
    <>
      <AllergiesSection />
      <DefaultNewsSection news={newsAllergies} />
    </>
  );
};

export default AllergiesPage;
