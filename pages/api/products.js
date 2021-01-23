import axios from 'axios'

export default async (req, res) => {
  const ShopifyAdminApi = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`
  });
  try {
    const result = await ShopifyAdminApi.get(`/products.json`);
    const products = result.data.products;
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
}