import { useEffect, useState } from 'react'
import axios from 'axios'
import { BuildImageUrl } from '../../../config/ShopifyImageConfig'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GenesisBoxDisplay = ({genesisBoxProduct}) => {
  const [ product, setProduct ] = useState({})

  useEffect(async () => {
    const lowerCaseTitle = genesisBoxProduct.title.toLowerCase()
    setProduct({
      ...genesisBoxProduct,
      title: lowerCaseTitle
    })
  }, [])

  var sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div id="genesis-box-display">
      <div className="info">
        <h2 className="title">
          { product.title }
        </h2>
        {  product.variants &&
          <p className="price">
            ${ product.variants[0].price }
          </p>
        }
        <button className="view-more" href="#">VIEW MORE</button>
        <button className="add-to-cart" href="#">ADD TO CART</button>
      </div>
      <div className="slider">
        <Slider {...sliderSettings}>
          {
            product.images &&
            product.images.map((image, index) => {
              return (
                <div key={index} className="image-container">
                  <img className="image" src={BuildImageUrl(image)} />
                </div>
              )
            })
          }
        </Slider>
      </div>
      <button className="view-more-mobile" href="#">VIEW MORE</button>
      <button className="add-to-cart-mobile" href="#">ADD TO CART</button>
    </div>
  )
}