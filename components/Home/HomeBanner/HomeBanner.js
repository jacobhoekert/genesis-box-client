import { ImageDiv } from './HomeBanner.style'

export const HomeBanner = ({data}) => {
  return (
    <div id="home-banner">
      <div className="blue-ribbon">
        <div className="flex-container">
            <ImageDiv bkg_img={data.image.url}></ImageDiv>
          <h1 className="text">{data.text}</h1>
        </div>
      </div>
    </div>
  )
}