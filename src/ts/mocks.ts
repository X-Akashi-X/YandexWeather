export type MockNewsDefault = {
  id: string;
  date: string;
  title: string;
  description: string;
  cover_img: string;
  content_images: string[];
};

export type MockNews = {
  forecastNews: MockNewsDefault[];
  allergiesNews: MockNewsDefault[];
  magneticNews: MockNewsDefault[];
};
