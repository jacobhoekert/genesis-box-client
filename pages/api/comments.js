import axios from 'axios'

export default async (req, res) => {
  const ShopifyAdminApi = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`
  });
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