import Head from 'next/head'
import Link from 'next/link'
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
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { World } from '../components/GlobalCommunity/World/World'

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
      </Head>
      <HeaderImage imagePath='/images/home-header-image.jpg' height='500px'/>
      <Navbar />
      <World />
      <HomeBanner data={data.HomeBanner}/>
      <Mission />
      <GenesisBoxDisplay />
      <GenesisMethod />
      <Testimonials data={data}/>
      <InstagramFeed />
      <Link href="/connect"><button className="pink-button">CONNECT WITH US</button></Link>
      <img className="blue-logo" src="/images/genesis-blue-circle.png"/>
      <div id='product-component-1610134264369'></div>
      {/* <BasicBanner data={data.basicBanner}/>
      <ProcessSection data={data.process}/>
      <Footer /> */}
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
