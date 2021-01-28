import { ImageDiv } from './HeaderImage.style'
import Link from 'next/link'

export const HeaderImage = props => {
  return (
    <ImageDiv bkg_img={props.imagePath} height={props.height}>
      <Link href="/">
        <img width="180px" src="/images/main-logo.png" className="logo" />
      </Link>
    </ImageDiv>
  )
}