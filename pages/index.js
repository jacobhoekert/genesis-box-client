import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import axios from 'axios'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Genesis Box</title>
        {/* <link rel='icon' href='/logo.png' /> */}
      </Head>
      <div id='outer-wrap'>
        <MobileMenu pageWrapId={'page-wrap'} outerContainerId={'outer-wrap'} customBurgerIcon={ <img src='/hamburger-menu-icon.png' /> } customCrossIcon={ <img src='hamburger-menu-cross.png' />} width={ 320 }/>
        <div id='page-wrap'>
          <Navbar />
          <HomeBanner />
          {/* <BasicBanner data={data.basicBanner}/>
          <ProcessSection data={data.process}/>
          <Footer /> */}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const res = await axios.get('/')
  const data = res.data;
  //console.log(data.process.step);
  return {
    props: {
      data
    }
  }
}
