import Head from 'next/head'
import { useState, useEffect } from 'react'
import StrapiApi from '../axios/StrapiApi'
import { Navbar } from '../components/Navbar/Navbar'
import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import { HomeBanner } from '../components/Home/HomeBanner/HomeBanner'
import { Mission } from '../components/Home/Mission/Mission'
import { GenesisBoxDisplay } from '../components/Home/GenesisBoxDisplay/GenesisBoxDisplay'
import { GenesisMethod } from '../components/Home/GenesisMethod/GenesisMethod'
import { Testimonials } from '../components/Home/Testimonials/Testimonials'
import { InstagramFeed } from '../components/Home/InstagramFeed/InstagramFeed'

export default function Home({data}) {

  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "../buy-button.js"
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const startVideo = () => {
    
    setIsPlaying(true);
  }

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
          <Mission />
          <GenesisBoxDisplay />
          <GenesisMethod />
          <Testimonials data={data}/>
          <InstagramFeed />

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
  console.log(data);
  return {
    props: {
      data
    }
  }
}
