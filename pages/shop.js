import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import { Shop } from '../components/Shop/Shop'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'

export default function ShopPage({data}) {

  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <div id='outer-wrap'>
        <MobileMenu pageWrapId={'page-wrap'} outerContainerId={'outer-wrap'} customBurgerIcon={ <img src='/images/hamburger-menu-icon.png' /> } customCrossIcon={ <img src='/images/hamburger-menu-cross.png' />} width={ 320 }/>
        <div className='page-wrap'>
          <HeaderImage />
          <Navbar />
          <Shop data={data}/>
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