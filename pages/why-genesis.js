import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import { WhyGenesis } from '../components/AboutUs/WhyGenesis/WhyGenesis'
import StrapiApi from '../axios/StrapiApi'

export default function WhyGenesisPage({data}) {

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
