import ShopifyAdminApi from '../../axios/ShopifyAdminApi'

export default async (req, res) => {
  try {
    const result = await ShopifyAdminApi.get(`/orders.json?status=any`);
    const orders = result.data.orders;
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
  }
}