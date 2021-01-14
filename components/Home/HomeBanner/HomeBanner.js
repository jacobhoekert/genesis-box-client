import { ImageDiv } from './HomeBanner.style';
import { Parallax } from 'react-scroll-parallax'

export const HomeBanner = ({data}) => {
  return (
    <div id="home-banner">
      <div className="blue-ribbon">
        <div className="flex-container">
          <Parallax y={[-10, 5]}>
            <ImageDiv bkg_img={data.image.url}></ImageDiv>
          </Parallax>
          <h1 className="text">{data.text}</h1>
        </div>
      </div>
    </div>
  )
}