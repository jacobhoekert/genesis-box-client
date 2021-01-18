import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getAllArticleUrls, articleUrlToTitle } from '../../lib/articles'
import { Navbar } from '../../components/Navbar/Navbar'
import { HeaderImage } from '../../components/HeaderImage/HeaderImage'
import { BlogGrid } from '../../components/TheGarden/BlogGrid/BlogGrid'

export default function TheGarden() {

  useEffect(async () => {
    // const paths = await getAllArticleUrls();
    // console.log(paths);

  }, [])

  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <BlogGrid />
    </>
  )
}

// export async function getStaticPaths() {
//   // Return a list of possible value for id
//   const paths = await getAllArticleUrls();
//   console.log(paths);
// }