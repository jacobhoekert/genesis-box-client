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

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
