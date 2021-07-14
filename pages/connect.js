import Head from 'next/head'
import StrapiApi from '../axios/StrapiApi'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { Navbar } from '../components/Navbar/Navbar'
import { Connect } from '../components/Connect/Connect/Connect'
import { Footer } from '../components/Footer/Footer'

export default function ConnectPage({footerData}) {
  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <div style={{backgroundColor: "#F6F1E9", paddingBottom: '30px'}}>
        <Connect />
      </div>
      <Footer footerData={footerData}/>
    </>
  )
}

export async function getStaticProps(){
  // get strapi footer content data
  const footerDataResult = await StrapiApi.get('/footer');
  const footerData = footerDataResult.data;

  return {
    props: {
      footerData
    }
  }
}
