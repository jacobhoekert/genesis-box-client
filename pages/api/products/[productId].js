import ShopifyAdminApi from '../../../axios/ShopifyAdminApi'

export default async (req, res) => {
  try {
    const {
      query: { productId },
    } = req
    const result = await ShopifyAdminApi.get(`/products/${productId}/images.json`);
    const images = result.data.images;
    res.status(200).json(images);
  } catch (error) {
    console.log(error);
  }
}