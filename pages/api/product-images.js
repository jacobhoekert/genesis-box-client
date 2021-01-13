import ShopifyAdminApi from '../../axios/ShopifyAdminApi'

export default async (req, res) => {
  try {
    console.log(req.data);
    const result = await ShopifyAdminApi.get(`/products/${req.params.productId}/images.json`);
    const images = result.data.images;
    res.status(200).json(images);
  } catch (error) {
    console.log(error);
  }
}