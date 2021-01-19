import Head from 'next/head'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { Navbar } from '../components/Navbar/Navbar'
import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import { WhyGenesis } from '../components/AboutUs/WhyGenesis/WhyGenesis'
import StrapiApi from '../axios/StrapiApi'

export default function WhyGenesisPage({data}) {

  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <div id='outer-wrap'>
        <MobileMenu pageWrapId={'page-wrap'} outerContainerId={'outer-wrap'} customBurgerIcon={ <img src='/images/hamburger-menu-icon.png' /> } customCrossIcon={ <img src='/images/hamburger-menu-cross.png' />} width={ 320 }/>
        <div className='page-wrap'>
          <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
          <Navbar />
          <WhyGenesis data={data}/>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const res = await StrapiApi.get('/why-genesis')
  const data = res.data;
  console.log(data);
  return {
    props: {
      data
    }
  }
}
