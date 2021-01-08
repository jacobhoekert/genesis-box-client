import ShopifyAdminApi from '../../axios-instances/ShopifyAdminApi'

export default async (req, res) => {
  try {
    const result = await ShopifyAdminApi.get(`/products.json`);
    const products = result.data.products;
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
}