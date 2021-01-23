import axios from 'axios'

export default async (req, res) => {
  const ShopifyAdminApi = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`
  });
  try {
    let allArticles = [];
    const result = await ShopifyAdminApi.get(`/blogs/${process.env.NEXT_PUBLIC_THE_GARDEN_BLOG_ID}/articles.json`);
    const articles = result.data.articles;
    let articlesWithTheirComments = [];
    for (const article of articles) {
      const result = await ShopifyAdminApi.get(`/comments.json?article_id=${article.id}&blog_id=${process.env.NEXT_PUBLIC_THE_GARDEN_BLOG_ID}`);
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