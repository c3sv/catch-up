export interface ArticleResource {
  source:{id:string |null;name:string;}
  title:string;
  description:string;
  url:string |null;
  urlToImage:string |null;
  publishedAt:string;
}
export interface TopHeadlinesResponse {
  status:string;
  totalResults:number;
  articles:ArticleResource[];
}
