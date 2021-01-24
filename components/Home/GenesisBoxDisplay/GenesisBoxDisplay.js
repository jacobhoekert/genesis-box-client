import { useEffect, useState } from 'react'
import axios from 'axios'
import { GENESIS_BOX_PRODUCT_KEY, SHOPIFY_SHOP_NAME, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../../../config/keys'
import { BuildImageUrl } from '../../../config/ShopifyImageConfig'
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

    RenderButtons(GENESIS_BOX_PRODUCT_KEY, GetUi())
    // RenderButtons('6305500856471', GetUi()) // testing normal view of ADD TO CART button with different product

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

  const GetUi = () => {
    const client = ShopifyBuy.buildClient({
      domain: `${SHOPIFY_SHOP_NAME}.myshopify.com`,
      storefrontAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN
    });
    const ui = ShopifyBuy.UI.init(client)
    return ui
  }

  const RenderButtons = (productId, ui) => {
    console.log(productId)
    ui.createComponent('product', {
      node: document.getElementById('view-more'),
      id: productId,
      options: {
        cart: {
          popup: false,
          styles: {
            button: {
              'color': '#F6F1E9',
              'background-color': '#4c1d31',

              ':hover': {
                'cursor': 'pointer',
                'transform': 'scale(1.03)',
                'background-color': '#773351',
              }
            }
          }
        },
        toggle: {
          styles: {
            toggle: {
              'background-color': '#4c1d31',

              ':hover': {
                'cursor': 'pointer',
                'background-color': '#773351',
              }
            }
          }
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
          },
          text: {
            outOfStock: 'OUT OF STOCK',
          },
          styles: {
            button: {
              'color': '#F6F1E9',
              'background-color': '#4c1d31',

              ':hover': {
                'cursor': 'pointer',
                'transform': 'scale(1.03)',
                'background-color': '#773351',
              }
            }
          }
        },
        product: {
          width: '30%',
          buttonDestination: 'modal',
          contents: {
            title: false,
            img: false,
            price: false,
            description: false,
            options: false,
            button: true
          },
          text: {
            button: 'VIEW MORE',
          },
          styles: {
            buttonWrapper: {
              'margin-top': '0',
            },
            button: {
              'display': 'inline-flex',
              'align-items': 'center',
              'justify-content': 'center',
              'font-size': '16px',
              'font-weight': '100',
              'line-height': '1.8',
              'margin-top': '0px',
              'margin-left': '10px !important',
              'min-width': '200px',
              'height': '35px',
              'border': 'none',
              'color': '#F6F1E9',
              'background-color': '#81606c',

              ':hover': {
                'cursor': 'pointer',
                'transform': 'scale(1.03)',
                'background-color': '#b98e9e',
              },

              ':focus': {
                'cursor': 'pointer',
                'transform': 'scale(1.03)',
                'background-color': '#b98e9e',
                'outline': 'none'
              }
            }
          }
        },
      }
    })

    ui.createComponent('product', {
      node: document.getElementById('add-to-cart'),
      id: productId,
      options: {
        cart: {
          popup: false,
          styles: {
            button: {
              'color': '#F6F1E9',
              'background-color': '#4c1d31',

              ':hover': {
                'cursor': 'pointer',
                'transform': 'scale(1.03)',
                'background-color': '#773351',
              }
            }
          }
        },
        toggle: {
          styles: {
            toggle: {
              'background-color': '#4c1d31',

              ':hover': {
                'cursor': 'pointer',
                'background-color': '#773351',
              }
            }
          }
        },
        product: {
          width: '30%',
          buttonDestination: 'cart',
          contents: {
            title: false,
            img: false,
            price: false,
            description: false,
            options: false,
            button: true
          },
          text: {
            button: 'ADD TO CART',
            outOfStock: 'OUT OF STOCK'
          },
          styles: {
            buttonWrapper: {
              'margin-top': '0',
            },
            button: {
              'display': 'inline-flex',
              'align-items': 'center',
              'justify-content': 'center',
              'font-size': '16px',
              'font-weight': '100',
              'line-height': '1.8',
              'margin-top': '20px !important',
              'margin-left': '10px !important',
              'min-width': '200px',
              'height': '35px',
              'border': 'none',
              'color': '#F6F1E9',
              'background-color': '#4c1d31',

              ':hover': {
                'cursor': 'pointer',
                'transform': 'scale(1.03)',
                'background-color': '#773351',
              },

              ':focus': {
                'cursor': 'pointer',
                'transform': 'scale(1.03)',
                'background-color': '#773351',
                'outline': 'none'
              }
            }
          }
        },
      }
    })
  }

  return (
    <div id="genesis-box-display">
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
      <div className="info">
        <h2 className="title">
          { product.title }
        </h2>
        {  product.variants &&
          <p className="price">
            ${ product.variants[0].price }
          </p>
        }
        <div id="view-more"></div>
        <div id="add-to-cart"></div>
      </div>
      {/* <button className="view-more-mobile" href="#">VIEW MORE</button>
      <button className="add-to-cart-mobile" href="#">ADD TO CART</button> */}
    </div>
  )
}