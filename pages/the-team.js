import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import { TheTeam } from '../components/AboutUs/TheTeam/TheTeam'
import StrapiApi from '../axios/StrapiApi'

export default function TheTeamPage({data}) {

  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <div id='outer-wrap'>
        <MobileMenu pageWrapId={'page-wrap'} outerContainerId={'outer-wrap'} customBurgerIcon={ <img src='/images/hamburger-menu-icon.png' /> } customCrossIcon={ <img src='/images/hamburger-menu-cross.png' />} width={ 320 }/>
        <div className='page-wrap'>
          <Navbar />
          <TheTeam data={data}/>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const res = await StrapiApi.get('/the-team')
  const data = res.data;
  return {
    props: {
      data
    }
  }
}
