import { Parallax } from 'react-scroll-parallax'
import { ImageDiv } from './HeaderImage.style'

export const HeaderImage = props => {
  return (
    <Parallax y={[-27, 0]}>
      <ImageDiv bkg_img={props.imagePath} height={props.height}>
        <img width="180px" src="/images/main-logo.png" className="logo" />
      </ImageDiv>
    </Parallax>
  )
}