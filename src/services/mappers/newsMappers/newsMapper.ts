import type { MockNews, MockNewsDefault } from "@ts/mocks";

export const allNews = (newsData: MockNews) => {
  return {
    newsForecast: newsData.forecastNews,
    newsAllergies: newsData.allergiesNews,
    newsMagnetic: newsData.magneticNews,
  };
};
export const randomNews = (newsData: MockNewsDefault[]) => {
  const randomIndex = Math.floor(Math.random() * newsData.length);
  return newsData[randomIndex];
};
