import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import { GenesisBoxProducts } from '../components/AboutUs/GenesisBoxProducts/GenesisBoxProducts'
import StrapiApi from '../axios/StrapiApi'

export default function GenesisBoxProductsPage({data}) {

  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <div id='outer-wrap'>
        <MobileMenu pageWrapId={'page-wrap'} outerContainerId={'outer-wrap'} customBurgerIcon={ <img src='/images/hamburger-menu-icon.png' /> } customCrossIcon={ <img src='/images/hamburger-menu-cross.png' />} width={ 320 }/>
        <div className='page-wrap'>
          <Navbar />
          <GenesisBoxProducts data={data}/>
        </div>
      </div>
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