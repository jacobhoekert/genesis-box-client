import Link from 'next/link';
import { ImageDiv } from './HomeBanner.style';

export const HomeBanner = ({data}) => {
  return (
    <div id="home-banner">
      <div className="flex-container">
        <h1 className="text">{data.text}</h1>
        <ImageDiv bkg_img={data.image.url}></ImageDiv>
      </div>
    </div>
  )
}