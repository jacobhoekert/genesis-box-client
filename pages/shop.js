import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ShopifyAdminApi from '../axios/ShopifyAdminApi'
import { SHOPIFY_SHOP_NAME, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../config/keys'
import { BuildImageUrl } from '../config/ShopifyImageConfig'

const Shop = () => {
  const [ products, setProducts ] = useState([])
  const [ ui, setUi ] = useState({})

  useEffect( async () => {
    const res = await axios.get('http://localhost:3000/api/products')
    setProducts(res.data)
    
    const client = ShopifyBuy.buildClient({
      domain: `${SHOPIFY_SHOP_NAME}.myshopify.com`,
      storefrontAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN
    });
  
    const ui = ShopifyBuy.UI.init(client);
    setUi(ui);

  },[])

  return (
    <>
    <Head>
      <title>The Genesis Box</title>
    </Head>
    <body>
      <div id='products'>
        {
          products &&
          products.map((product, index) => {
            console.log(product.id)
            return (
              <div key={index} id={`product-${product.id}`}>
                <img className="product-image" src={BuildImageUrl(product.images[0])} onLoad={() => RenderButton(product, ui)} />
              </div>
            )
          })
        }
      </div>
    </body>
    </>
  )
}

const RenderButton = async (product, ui) => {
  ui.createComponent('product', {
    handle: product.handle,
    node: document.getElementById(`product-${product.id}`),
    options: {
      cart: {
        popup: false
      },
      product: {
        iframe: false,
        buttonDestination: 'cart',
        contents: {
          title: false,
          img: false,
          price: false,
          description: false,
          button: true
        },
      }
    }
  })
}

export default Shop