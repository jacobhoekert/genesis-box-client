import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'
import { SHOPIFY_SHOP_NAME, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../config/keys'

const Shop = () => {

  useEffect( async () => {
    const res = await axios.get('http://localhost:3000/api/products')
    DisplayProducts(res.data)
    // add clean up to remove dom elements?
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

const DisplayProducts = (products) => {
  const client = ShopifyBuy.buildClient({
    domain: `${SHOPIFY_SHOP_NAME}.myshopify.com`,
    storefrontAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN, // previously apiKey, now deprecated
  });
  
  const ui = ShopifyBuy.UI.init(client);

  for (const product of products) {
    ui.createComponent('product', {
      id: product.id,
      node: document.getElementById('products'),
      options: {
        cart: {
          startOpen: true,
          popup: false
        },
      }
    });
  }
}

export default Shop