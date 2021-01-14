import { useEffect, useState } from 'react'
import axios from 'axios'
import { GENESIS_BOX_PRODUCT_KEY } from '../../../config/keys'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GenesisBoxDisplay = () => {
  const [ product, setProduct ] = useState({})

  useEffect(async () => {
    const result = await axios.get(`http://localhost:3000/api/products/${GENESIS_BOX_PRODUCT_KEY}`)
    const lowerCaseTitle = result.data.title.toLowerCase()
    setProduct({
      ...result.data,
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
      <div className="slider-container"> 
        <div className="carousel">
          <Slider {...sliderSettings}>
            {
              product.images &&
              product.images.map((image, index) => {
                console.log(image)
                return (
                  <div key={index} className="image">
                    <img src={image.src} />
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}