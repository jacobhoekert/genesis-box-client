import Head from 'next/head'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { Navbar } from '../components/Navbar/Navbar'
import { TheTeam } from '../components/AboutUs/TheTeam/TheTeam'
import StrapiApi from '../axios/StrapiApi'
import { Footer } from '../components/Footer/Footer'

export default function TheTeamPage({data, footerData}) {

  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <div style={{backgroundColor: "#F6F1E9", paddingBottom: '30px'}}>
        <TheTeam data={data}/>
      </div>
      <Footer footerData={footerData}/>
    </>
  )
}

export async function getStaticProps(){
  // get strapi team content data
  const res = await StrapiApi.get('/the-team')
  const data = res.data;

  // get strapi footer content data
  const footerDataResult = await StrapiApi.get('/footer');
  const footerData = footerDataResult.data;
  
  return {
    props: {
      data,
      footerData
    }
  }
}
