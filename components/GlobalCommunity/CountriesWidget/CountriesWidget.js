import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Markdown from 'markdown-to-jsx'
import { useEffect, useRef } from 'react'

export const CountriesWidget = (props) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(props.selectedCountryIndex);
  }, [props.selectedCountryIndex])

  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: sliderIndex => {
      props.handleSliderChange(sliderIndex);
    }
  };
  return (
    <div className="countries-widget">
      <div className="title-container">
        <h1 className="genesis">genesis</h1>
        <h1 className="countries">countries</h1>
      </div>
      <div className="slider">
        <Slider ref={slider} {...settings}>
          {
            
            props.genesisCountries.map((country, index) => {
              console.log(country);
              return (
                <div key={index} className="country-container">
                  <img className="country-image" src={country.countryImage.url}/>
                  <h2 className="country-name">{country.countryName}</h2>
                  {
                    country.artisans.map((artisan, index) => {
                      return (
                        <div key={index} className="grid">
                          <div className="artisan-row">
                            <img className="artisan-image" src={artisan.artisanImage.url}/>
                            <div className="artisan-text">
                              <p className="artisan-name">{artisan.artisanName}</p>
                              <Markdown className="artisan-info">{artisan.artisanInfo}</Markdown>
                            </div>
                          </div>
                          <div className="product-row">
                            <div className="product-text">
                              <p className="product-name">{artisan.productName}</p>
                              <Markdown className="product-info">{artisan.productInfo}</Markdown>
                            </div>
                            <img className="product-image" src={artisan.productImage.url}/>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}