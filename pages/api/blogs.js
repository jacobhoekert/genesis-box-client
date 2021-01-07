import ShopifyAdminApi from '../../axios-instances/ShopifyAdminApi'

export default async (req, res) => {
  try {
    const result = await ShopifyAdminApi.get(`/blogs.json`);
    const blogs = result.data.blogs;
    let allArticles = [];
    for (const blog of blogs) {
      const result = await ShopifyAdminApi.get(`/blogs/${blog.id}/articles.json`);
      const articles = result.data.articles;
      allArticles.push(articles);
    }
    res.status(200).json(allArticles)
  } catch (error) {
    console.log(error);
  }
}