import Head from 'next/head'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { Navbar } from '../components/Navbar/Navbar'
import { Connect } from '../components/Connect/Connect/Connect'

export default function ConnectPage({data}) {
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
    </>
  )
}

// export async function getStaticProps(){
//   const res = await StrapiApi.get('/why-genesis')
//   const data = res.data;
//   console.log(data);
//   return {
//     props: {
//       data
//     }
//   }
// }
