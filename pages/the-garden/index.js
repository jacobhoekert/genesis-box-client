import Head from 'next/head'
import axios from 'axios'
import { getAllArticlesFromShopify } from '../../lib/articles'
import { Navbar } from '../../components/Navbar/Navbar'
import { HeaderImage } from '../../components/HeaderImage/HeaderImage'
import { BlogGrid } from '../../components/TheGarden/BlogGrid/BlogGrid'

export default function TheGarden({allArticles}) {
  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <BlogGrid allArticles={allArticles}/>
    </>
  )
}

export async function getStaticProps() {
  const allArticles = await getAllArticlesFromShopify();

  return {
    props: {
      allArticles,
    },
    revalidate: 2,
  }
}