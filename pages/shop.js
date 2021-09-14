import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import { Shop } from '../components/Shop/Shop'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import axios from 'axios'
import StrapiApi from '../axios/StrapiApi'
import { Footer } from '../components/Footer/Footer'

export default function ShopPage({allActiveProducts, orders, footerData}) {
  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <div style={{backgroundColor: "#F6F1E9", paddingBottom: '30px'}}>
        <Shop allActiveProducts={allActiveProducts} orders={orders}/>
      </div>
      <Footer footerData={footerData}/>
    </>
  )
}

export async function getStaticProps(){
  // get strapi footer content data
  const footerDataResult = await StrapiApi.get('/footer');
  const footerData = footerDataResult.data;

  const ShopifyAdminApi = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`
  });
  // get shopify products
  const allProductsResult = await ShopifyAdminApi.get(`/products.json`);
  const allProducts = allProductsResult.data.products;
  
  const allActiveProducts = allProducts.filter(product => product.status == "active");

  console.log(allActiveProducts);

  // get shopify orders
  const ordersResult = await ShopifyAdminApi.get(`/orders.json?status=any`);
  const orders = ordersResult.data.orders;

  return {
    props: {
      allActiveProducts,
      orders,
      footerData
    },
    revalidate: 2,
  }
}