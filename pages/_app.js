import axios from 'axios'
import '../styles/globals.css'
import '../components/Navbar/Navbar.scss'
import '../components/MobileMenu/MobileMenu.scss'
import '../components/HomeBanner/HomeBanner.scss'
import '../components/AboutUs/WhyGenesis/WhyGenesis.scss'
import '../components/AboutUs/TheTeam/TheTeam.scss'
import '../components/AboutUs/TheTeam/Profile/Profile.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
