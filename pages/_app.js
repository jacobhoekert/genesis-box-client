import axios from 'axios'
import '../styles/globals.css'
import '../components/Navbar/Navbar.scss'
import '../components/MobileMenu/MobileMenu.scss'
import '../components/Home/HomeBanner/HomeBanner.scss'
import '../components/Home/Mission/Mission.scss'
import '../components/Home/Video/Video.scss'
import '../components/Home/GenesisBoxDisplay/GenesisBoxDisplay.scss'
import '../components/Home/GenesisMethod/GenesisMethod.scss'
import '../components/Home/Testimonials/Testimonials.scss'
import '../components/Home/InstagramFeed/InstagramFeed.scss'
import '../components/AboutUs/WhyGenesis/WhyGenesis.scss'
import '../components/AboutUs/TheTeam/TheTeam.scss'
import '../components/AboutUs/TheTeam/Profile/Profile.scss'
import '../components/AboutUs/GenesisBoxProducts/GenesisBoxProducts.scss'
import '../components/TheGarden/BlogGrid/BlogGrid.scss'
import '../components/TheGarden/BlogCard/BlogCard.scss'
import '../components/HeaderImage/HeaderImage.scss'

import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import { ParallaxProvider } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <div id='outer-wrap'>
          <MobileMenu pageWrapId={'page-wrap'} outerContainerId={'outer-wrap'} customBurgerIcon={ <img src='/images/hamburger-menu-icon.png' /> } customCrossIcon={ <img src='/images/hamburger-menu-cross.png' />} width={ 320 }/>
        <div className='page-wrap'>
          <Component {...pageProps} />
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default MyApp
