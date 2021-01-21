import ShopifyAdminApi from '../../axios/ShopifyAdminApi'

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const author = `${req.body.form.firstName} ${req.body.form.lastName}`;

      const result = await ShopifyAdminApi.post(`/comments.json`, {
        "comment": {
          "body": req.body.form.message,
          "author": author,
          "email": req.body.form.email,
          "blog_id": req.body.articleData.blog_id,
          "article_id": req.body.articleData.id
        }
      });
      console.log(result);
      res.status(200).send("nice");
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('/api/comments only handles post requests')
  }
}