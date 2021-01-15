import axios from 'axios'
import '../styles/globals.css'
import '../components/Navbar/Navbar.scss'
import '../components/MobileMenu/MobileMenu.scss'
import '../components/Home/HeaderImage/HeaderImage.scss'
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

import { ParallaxProvider } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp
