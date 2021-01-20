import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import { GenesisPhotoAlbum } from '../components/AboutUs/GenesisPhotoAlbum/GenesisPhotoAlbum'
import StrapiApi from '../axios/StrapiApi'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'

export default function GenesisPhotoAlbumPage({data}) {

  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <GenesisPhotoAlbum data={data}/>
    </>
  )
}

// export async function getStaticProps(){
//   const res = await StrapiApi.get('/genesis-box-products')
//   const data = res.data;
//   console.log(data);
//   return {
//     props: {
//       data
//     }
//   }
// }