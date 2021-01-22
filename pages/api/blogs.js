import ShopifyAdminApi from '../../axios/ShopifyAdminApi'
import { THE_GARDEN_BLOG_ID } from '../../config/keys'

export default async (req, res) => {
  try {
    let allArticles = [];
    const result = await ShopifyAdminApi.get(`/blogs/${THE_GARDEN_BLOG_ID}/articles.json`);
    const articles = result.data.articles;
    let articlesWithTheirComments = [];
    for (const article of articles) {
      const result = await ShopifyAdminApi.get(`/comments.json?article_id=${article.id}&blog_id=${THE_GARDEN_BLOG_ID}`);
      const comments = result.data.comments;
      let articleAndComments = { article, comments }
      articlesWithTheirComments.push(articleAndComments)
    }
    allArticles = articlesWithTheirComments;
    res.status(200).json(allArticles);
  } catch (error) {
    console.log(error);
  }
}