import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'
import ShopifyAdminApi from '../axios/ShopifyAdminApi'
import { SHOPIFY_SHOP_NAME, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../config/keys'

const Shop = () => {

  useEffect( async () => {
    const res = await axios.get('http://localhost:3000/api/products')
    DisplayProducts(res.data)

    // const parent = document.getElementById('products')
    // while (parent.firstChild) {
    //   parent.removeChild(parent.firstChild)
    // }

  },[])

  return (
    <>
    <Head>
      <title>The Genesis Box</title>
    </Head>
    <body>
      <div id='products'></div>
    </body>
    </>
  )
}

const DisplayProducts = async (products) => {
  const client = ShopifyBuy.buildClient({
    domain: `${SHOPIFY_SHOP_NAME}.myshopify.com`,
    storefrontAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN, // previously apiKey, now deprecated
  });
  
  const ui = ShopifyBuy.UI.init(client);

  for (const product of products) {
    const result = await axios.get(`http://localhost:3000/api/products/${product.id}`)
    console.log(product.id)
    console.log(result.data)

    ui.createComponent('product', {
      id: product.id,
      node: document.getElementById('products'),
      // options: {
      //   product: {
      //     layout: 'horizontal',
      //     width: '100px',
      //     // iframe: false,
      //     isButton: true,
      //     buttonDestination: 'modal',
      //     contents: {
      //       img: true,
      //       price: true,
      //       description: true,
      //       button: false
      //     },
      //     styles: {
      //       h1: {
      //         color: 'blue',
      //         ':hover': {
      //           'text-color': 'blue'
      //         }
      //       }
      //     }
      //   },
      options: {
        modalProduct: { 
          styles: {
            button: {
              'background-color': '#5ff7d2',
               'color': '#fff',
            }
          }
        },
        toggle: { 
          styles: {
            toggle: {
              'background-color': '#5ff7d2',
               'color': '#fff',
            }
          }
        },
        product: {
          buttonDestination: 'modal',
          order: [
            'button',
            'img',
            'info',
          ],
          contents: {
            img: true,
            info: true,
            title: false,
            price: false,
          },
          templates: {
            info: '<div class="{{data.classes.product.overlay}}"></div>' +
            '<div class="{{data.classes.product.info}}">' +
            '<hr class="{{data.classes.product.divider}}">' +
            '<h1 class="{{data.classes.product.title}}">{{data.title}}</h1>' +
            '{{#data.hasVariants}}<div class="{{data.classes.product.options}}">' +
              '{{#data.decoratedOptions}}' +
              '<div class="{{data.classes.product.option}}">' +
              '{{#values}}' +
                  '<span class="{{#disabled}}{{data.classes.option.optionDisabled}}{{/disabled}}  {{data.classes.product.optionValue}}">{{name}}</span>' +
              '{{/values}}' +
              '</div>' +
              '{{/data.decoratedOptions}}' +
            '</div>{{/data.hasVariants}}' +
            '<div class="{{data.classes.product.description}}">{{data.selectedVariant.formattedPrice}}</div>' +
            '</div>',
          },
          classes: {
            info: 'product-info',
            overlay: 'product-overlay',
            optionValue: 'product-option-value',
            option: 'product-option',
            divider: 'product-divider',
          },
          styles: {
            optionValue: {
              display: 'inline-block',
              'margin-right': '5px'
            },
            option: {
              'text-align': 'center',
            },
            info: { // info that slides up
              position: 'relative',
              transition: 'all 0.3s',
              background: 'white',
              padding: '30px 20px 20px',
              top: '-15px'
            },
            divider: {
              'position': 'absolute',
              'width': '20px',
              'height': '3px',
              'background-color': '#5ff7d2',
              'border': 0,
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)'
            },
            button: {
              position: 'absolute',
              transition: 'all .3s',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              opacity: 0,
              top: '80px',
              'background-color': 'rgba(255, 255, 255, 0.3)',
              color: '#fff',
              border: '2px solid #fff',
              'z-index': '100',
              'font-weight': 'bold',
              ':hover': {
                'color': '#5ff7d2',
                'background-color': '#fff',
              }
            },
            overlay: { // green overlay that fades in
              transition: 'all .3s',
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              'background-color': '#5ff7d2',
              opacity: 0,
            },
            description: {
              'font-size': '12px'
            },
            product: {
              height: '205px',
              position: 'relative',
              ':hover': {
                overlay: {
                  opacity: '0.5',
                },
                button: {
                  opacity: '1',
                },
                info: {
                  'transform': 'translateY(-110px)',
                },
              },
            }
          }
        },
        // cart: {
        //   iframe: false,
        //   popup: false
        // },
      }
    });
  }
}

export default Shop