import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'
import { SHOPIFY_SHOP_NAME, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../config/keys'

const Shop = () => {

  useEffect( async () => {
    const res = await axios.get('http://localhost:3000/api/products')
    DisplayProducts(res.data)
  },[])

  return (
    <>
    <Head>
      <title>The Genesis Box</title>
    </Head>
    <body>
      <script src="http://sdks.shopifycdn.com/buy-button/latest/buybutton.js"></script>
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
      node: document.getElementById('products')
    });
  }
}

export default Shop