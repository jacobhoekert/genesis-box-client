import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ShopifyAdminApi from '../axios/ShopifyAdminApi'
import { SHOPIFY_SHOP_NAME, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../config/keys'
import { BuildImageUrl } from '../config/ShopifyImageConfig'

const Shop = () => {
  const [ products, setProducts ] = useState([])

  useEffect( async () => {
    const res = await axios.get('http://localhost:3000/api/products')
    const products = res.data
    
    const client = ShopifyBuy.buildClient({
      domain: `${SHOPIFY_SHOP_NAME}.myshopify.com`,
      storefrontAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN
    });
  
    const ui = ShopifyBuy.UI.init(client);

    RenderProducts(products, ui)

  },[])

  return (
    <>
    <Head>
      <title>The Genesis Box</title>
    </Head>
    <body>
      <div id='products'>
        {/* {
          products &&
          products.map((product, index) => {
            // console.log(product.id)
            return (
              <div key={index} id={`product-${product.id}`}>
                {/* <img className="product-image" src={BuildImageUrl(product.images[0])} onLoad={() => RenderProduct(product, ui)} /> */}
              {/* </div> */}
            {/* )
          }) */}
        {/* } */}
      </div>
    </body>
    </>
  )
}

const RenderProducts = (products, ui) => {
  for (const product of products) {
    ui.createComponent('product', {
      handle: product.handle,
      node: document.getElementById('products'),
      options: {
        cart: {
          // iframe: false,
          popup: false
        },
        product: {
          // iframe: false,
          buttonDestination: 'modal',
          isButton: true,
          contents: {
            title: true,
            img: true,
            price: true,
            description: false,
            options: false,
            button: false
          },
        }
      }
    })
  }
}

export default Shop