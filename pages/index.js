import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import { HomeBanner } from '../components/HomeBanner/HomeBanner'
import StrapiApi from '../axios/StrapiApi'
import { useEffect } from 'react'

export default function Home({data}) {

  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "../buy-button.js"
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  return (


    <>
      <Head>
        <title>The Genesis Box</title>
        {/* <link rel='icon' href='/logo.png' /> */}
      </Head>
      <div id='outer-wrap'>
        <MobileMenu pageWrapId={'page-wrap'} outerContainerId={'outer-wrap'} customBurgerIcon={ <img src='/images/hamburger-menu-icon.png' /> } customCrossIcon={ <img src='/images/hamburger-menu-cross.png' />} width={ 320 }/>
        <div className='page-wrap'>
          <Navbar />
          <HomeBanner data={data.HomeBanner}/>
          
          <div id='product-component-1610134264369'></div>
          

          {/* <BasicBanner data={data.basicBanner}/>
          <ProcessSection data={data.process}/>
          <Footer /> */}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const res = await StrapiApi.get('/home')
  const data = res.data;
  return {
    props: {
      data
    }
  }
}
