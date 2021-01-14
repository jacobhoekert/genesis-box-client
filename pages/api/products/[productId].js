import ShopifyAdminApi from '../../../axios/ShopifyAdminApi'

export default async (req, res) => {
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