import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import { HomeBanner } from '../components/HomeBanner/HomeBanner'
import StrapiApi from '../axios-instances/StrapiApi'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>The Genesis Box</title>
        {/* <link rel='icon' href='/logo.png' /> */}
      </Head>
      <div id='outer-wrap'>
        <MobileMenu pageWrapId={'page-wrap'} outerContainerId={'outer-wrap'} customBurgerIcon={ <img src='/images/hamburger-menu-icon.png' /> } customCrossIcon={ <img src='/images/hamburger-menu-cross.png' />} width={ 320 }/>
        <div id='page-wrap'>
          <Navbar />
          <HomeBanner data={data.HomeBanner}/>
          
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
  console.log(data.HomeBanner);
  return {
    props: {
      data
    }
  }
}
