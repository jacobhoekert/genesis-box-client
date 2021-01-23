import axios from 'axios'

export default async (req, res) => {
  const ShopifyAdminApi = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`
  });
  try {
    const {
      query: { productId },
    } = req
    const result = await ShopifyAdminApi.get(`/products/${productId}.json`);
    res.status(200).json(result.data.product);
  } catch (error) {
    console.log(error);
  }
}