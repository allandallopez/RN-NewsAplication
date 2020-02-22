export type NewsDataType = {
  status: string;
  totalResults: number;
  articles: NewsArticlesType[];
};

export type NewsArticlesType = {
  source: NewsArticlesSourceType;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type NewsArticlesSourceType = {
  id: string;
  name: string;
};
