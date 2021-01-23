import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import { Shop } from '../components/Shop/Shop'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import axios from 'axios'

export default function ShopPage({products, orders}) {
  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <Shop products={products} orders={orders}/>
    </>
  )
}

export async function getStaticProps(){
  const ShopifyAdminApi = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`
  });

  // get shopify products
  const productsResult = await ShopifyAdminApi.get(`/products.json`);
  const products = productsResult.data.products;

  // get shopify orders
  const ordersResult = await ShopifyAdminApi.get(`/orders.json?status=any`);
  const orders = ordersResult.data.orders;

  return {
    props: {
      products,
      orders
    }
  }
}