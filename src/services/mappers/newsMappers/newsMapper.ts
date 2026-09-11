import type { MockNews } from "@ts/mocks";

export const allNews = (newsData: MockNews[]) => {
  return newsData;
};
export const randomNews = (newsData: MockNews[]) => {
  const randomIndex = Math.floor(Math.random() * newsData.length);
  return newsData[randomIndex];
};
