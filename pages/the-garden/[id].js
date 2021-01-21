import Head from 'next/head'
import Link from 'next/link'
import { getAllArticleUrls, getArticleData } from '../../lib/articles'
import { Navbar } from '../../components/Navbar/Navbar'
import { HeaderImage } from '../../components/HeaderImage/HeaderImage'
import { useEffect } from 'react';
import { BlogArticle } from '../../components/TheGarden/BlogArticle/BlogArticle';
import { CommentForm } from '../../components/TheGarden/CommentForm/CommentForm';
import { BlogComments } from '../../components/TheGarden/BlogComments/BlogComments';

export default function Article({ articleData }) {

  useEffect(() => {
    console.log(articleData);
  }, [])

  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
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
  const articleData = await getArticleData(params.id);
  return {
    props: {
      articleData
    }
  }
}