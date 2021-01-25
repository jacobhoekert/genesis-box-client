import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import StrapiApi from '../axios/StrapiApi'
import { Navbar } from '../components/Navbar/Navbar'
import { GlobeSection } from '../components/Home/GlobeSection/GlobeSection'
import { HomeBanner } from '../components/Home/HomeBanner/HomeBanner'
import { Mission } from '../components/Home/Mission/Mission'
import { GenesisBoxDisplay } from '../components/Home/GenesisBoxDisplay/GenesisBoxDisplay'
import { GenesisMethod } from '../components/Home/GenesisMethod/GenesisMethod'
import { Testimonials } from '../components/Home/Testimonials/Testimonials'
import { InstagramFeed } from '../components/Home/InstagramFeed/InstagramFeed'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'

export default function Home({data, countries, genesisBoxProduct}) {
  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/home-header-image.jpg' height='500px'/>
      <Navbar />
      <div style={{backgroundColor: "#F6F1E9"}}>
        <GlobeSection countries={countries}/>
        <HomeBanner data={data.HomeBanner}/>
        <Mission />
        <GenesisBoxDisplay genesisBoxProduct={genesisBoxProduct}/>
        <GenesisMethod />
        <Testimonials data={data}/>
        <InstagramFeed />
        <Link href="/connect"><button className="pink-button">CONNECT WITH US</button></Link>
        <img className="blue-logo" src="/images/genesis-blue-circle.png"/>
        <div id='product-component-1610134264369'></div>
      </div>
      
    </>
  )
}

export async function getStaticProps(){
  // get strapi home content data
  const homeDataResult = await StrapiApi.get('/home');
  const data = homeDataResult.data;

  // get strapi countries data
  const countriesResult = await StrapiApi.get('/countries');
  const countries = countriesResult.data;

  // get genesis box product for GenesisBoxDisplay
  const ShopifyAdminApi = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`
  });
  const result = await ShopifyAdminApi.get(`/products/${process.env.NEXT_PUBLIC_GENESIS_BOX_PRODUCT_KEY}.json`);
  const genesisBoxProduct = result.data.product;

  return {
    props: {
      data,
      genesisBoxProduct,
      countries
    }
  }
}
