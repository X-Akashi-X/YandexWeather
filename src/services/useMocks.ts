import { useMemo } from "react";
import newsData from "@mocks/news.json";
import { allNews, randomNews } from "./mappers/newsMappers/newsMapper";

const useMocks = () => {
  return {
    getAllNews: allNews(newsData),
    getRandomNews: useMemo(() => {
      return {
        forecast: randomNews(newsData.forecastNews),
        allergies: randomNews(newsData.allergiesNews),
      };
    }, []),
  };
};

export default useMocks;
