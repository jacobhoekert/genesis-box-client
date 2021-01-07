import axios from 'axios'
import '../styles/globals.css'
import '../components/Navbar/Navbar.scss';
import '../components/MobileMenu/MobileMenu.scss';

axios.defaults.baseURL = 'https://onemd-strapi.herokuapp.com'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
