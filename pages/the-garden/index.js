import Head from 'next/head'
import StrapiApi from '../../axios/StrapiApi'
import { getAllArticlesFromShopify } from '../../lib/articles'
import { Navbar } from '../../components/Navbar/Navbar'
import { HeaderImage } from '../../components/HeaderImage/HeaderImage'
import { BlogGrid } from '../../components/TheGarden/BlogGrid/BlogGrid'
import { Footer } from '../../components/Footer/Footer'
import { useEffect } from 'react'

export default function TheGarden({allArticles, footerData}) {

  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <div style={{backgroundColor: "#F6F1E9", paddingBottom: '30px'}}>
        <BlogGrid allArticles={allArticles}/>
      </div>
      <Footer footerData={footerData}/>
    </>
  )
}

export async function getStaticProps() {
  // get strapi footer content data
  const footerDataResult = await StrapiApi.get('/footer');
  const footerData = footerDataResult.data;

  // get blog data from shopify
  const allArticles = await getAllArticlesFromShopify();

  return {
    props: {
      allArticles,
      footerData
    },
    revalidate: 30,
  }
}