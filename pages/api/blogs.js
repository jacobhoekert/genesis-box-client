import ShopifyAdminApi from '../../axios-instances/ShopifyAdminApi'

export default async (req, res) => {
  try {
    const result = await ShopifyAdminApi.get(`/blogs.json`);
    const blogs = result.data.blogs;
    let allArticles = [];
    for (const blog of blogs) {
      const result = await ShopifyAdminApi.get(`/blogs/${blog.id}/articles.json`);
      const articles = result.data.articles;
      let articlesWithTheirComments = [];
      for (const article of articles) {
        const result = await ShopifyAdminApi.get(`/comments.json`, {
          article_id: article.id,
          blog_id: blog.id
        });
        const comments = result.data.comments;
        const articleAndComments = { article, comments }
        articlesWithTheirComments.push(articleAndComments)
      }
      allArticles.push(articlesWithTheirComments);
    }
    res.status(200).json(allArticles)
  } catch (error) {
    console.log(error);
  }
}