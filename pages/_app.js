import axios from 'axios'
import '../styles/globals.css'
import '../components/Navbar/Navbar.scss'
import '../components/MobileMenu/MobileMenu.scss'
import '../components/GlobalCommunity/World/World.scss'
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
import '../components/AboutUs/GenesisPhotoAlbum/GenesisPhotoAlbum.scss'
import '../components/AboutUs/EntrepreneurialEmpowerment/EntrepreneurialEmpowerment.scss'
import '../components/TheGarden/BlogGrid/BlogGrid.scss'
import '../components/TheGarden/BlogCard/BlogCard.scss'
import '../components/Shop/Shop.scss'
import '../components/TheGarden/BlogArticle/BlogArticle.scss'
import '../components/TheGarden/BlogComments/BlogComments.scss'
import '../components/TheGarden/CommentForm/CommentForm.scss'
import '../components/Connect/Connect/Connect.scss'
import '../components/Connect/ConnectTitle/ConnectTitle.scss'
import '../components/Connect/ConnectWidget/ConnectWidget.scss'
import '../components/Connect/SendMessageForm/SendMessageForm.scss'
import '../components/Connect/EmailListForm/EmailListForm.scss'
import '../components/Connect/TestimonyPrayerForm/TestimonyPrayerForm.scss'

import { MobileMenu } from '../components/MobileMenu/MobileMenu'
import { ParallaxProvider } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <div id='outer-wrap'>
          <MobileMenu pageWrapId={'page-wrap'} outerContainerId={'outer-wrap'} customBurgerIcon={ <img src='/images/hamburger-menu-icon.png' /> } customCrossIcon={ <img src='/images/hamburger-menu-cross.png' />} width={ 320 } />
        <div className='page-wrap'>
          <Component {...pageProps} />
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default MyApp
