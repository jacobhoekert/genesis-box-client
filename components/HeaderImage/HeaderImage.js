import { ImageDiv } from './HeaderImage.style'

export const HeaderImage = props => {
  return (
    <ImageDiv bkg_img={props.imagePath} height={props.height}>
      <img width="180px" src="/images/main-logo.png" className="logo" />
    </ImageDiv>
  )
}