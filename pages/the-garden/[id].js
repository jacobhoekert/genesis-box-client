import Head from 'next/head'
import Link from 'next/link'
import StrapiApi from '../../axios/StrapiApi'
import { Navbar } from '../../components/Navbar/Navbar'
import { HeaderImage } from '../../components/HeaderImage/HeaderImage'
import { BlogArticle } from '../../components/TheGarden/BlogArticle/BlogArticle';
import { CommentForm } from '../../components/TheGarden/CommentForm/CommentForm';
import { BlogComments } from '../../components/TheGarden/BlogComments/BlogComments';
import { getAllArticleUrls, getArticleData } from '../../lib/articles'
import { Footer } from '../../components/Footer/Footer'
import { useEffect } from 'react'

useEffect(() => {
  console.log(articleData);
}, [articleData])

export default function Article({ articleData, footerData}) {
  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <div style={{backgroundColor: "#F6F1E9", paddingBottom: '30px'}}>
        <BlogArticle articleData={articleData}/>
        {
          articleData.comments.length > 0 &&
            <BlogComments comments={articleData.comments}/>
        }
        <CommentForm articleData={articleData}/>
        <Link href='/the-garden'>
          <button className="pink-button centered-flex" href="#">
            <img className="left-arrow" src="/images/left-arrow-white.png"/>
            Back to The Garden
          </button>
        </Link>
        <div className="empty-space"></div>
      </div>
      <Footer footerData={footerData}/>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getAllArticleUrls();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // get strapi footer content data
  const footerDataResult = await StrapiApi.get('/footer');
  const footerData = footerDataResult.data;

  // get blog article data from shopify
  const articleData = await getArticleData(params.id);

  return {
    props: {
      articleData,
      footerData
    },
    revalidate: 30,
  }
}