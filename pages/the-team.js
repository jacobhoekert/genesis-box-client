import Head from 'next/head'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
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
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <TheTeam data={data}/>
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
