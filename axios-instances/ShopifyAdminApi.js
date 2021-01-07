import axios from 'axios'
import { SHOPIFY_API_KEY, SHOPIFY_API_PASSWORD, SHOPIFY_API_VERSION, SHOPIFY_SHOP_NAME } from '../config/keys'

const ShopifyAdminApi = axios.create({
  baseURL: `https://${SHOPIFY_API_KEY}:${SHOPIFY_API_PASSWORD}@${SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/${SHOPIFY_API_VERSION}`
});

export default ShopifyAdminApi;