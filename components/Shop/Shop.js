import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ShopifyAdminApi from '../../axios/ShopifyAdminApi' 
import { SHOPIFY_SHOP_NAME, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../../config/keys'

export const Shop = () => {
  const [ tagNames, setTagNames ] = useState([])
  const [ tagProducts, setTagProducts ] = useState([])
  const [ activeProducts, setActiveProducts ] = useState([])
  const [ resultingQuantity, setResultingQuantity ] = useState(0)

  useEffect( async () => {
    const res = await axios.get('http://localhost:3000/api/products')
    const products = res.data
  
    const tags = GetProductTags(products)
    setTagNames(tags.names)
    setTagProducts(tags.products)

    RenderProducts(products, GetUi())
    setActiveProducts(products)
    setResultingQuantity(products.length)

    return (() => {
      DestroyProducts(activeProducts, GetUi())
    })
  }, [])

  const rebuildProducts = (relevantProducts) => {
    const ui = GetUi()
    DestroyProducts(activeProducts, ui)
    RenderProducts(relevantProducts, ui)
    setActiveProducts(relevantProducts)
    setResultingQuantity(relevantProducts.length)
  }

  const handleTagChange = (tag) => {
    const relevantProducts = tagProducts[tagNames.indexOf(tag)]
    rebuildProducts(relevantProducts)
  }

  const handleSortChange = (sortBy) => {
    console.log(activeProducts)
    const relevantProducts = SortActiveProducts(activeProducts, sortBy)
    rebuildProducts(relevantProducts)
  }

  const sortOptions = [
    'Featured',
    'Best Selling',
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low',
    'Date, old to new',
    'Date, new to old'
  ]

  return (
    <>
    <Head>
      <title>The Genesis Box</title>
    </Head>
    <body>
      <div id="title-container">
        <h1 id="title">Products</h1>
      </div>
      <div id='filter-sort-bar'>
        <div id='filter-menus'>
          <span>FILTER BY</span>
          <select id='tag-selection' onChange={(event) => handleTagChange(event.target.value)}>
            { 
              tagNames.map(tag => {
                return (<option value={tag}>{tag}</option>)
              })
            }
          </select>
          {/* <h3>Sort By</h3>
          <select id='sort-selection' onChange={(event) => handleSortChange(event.target.value)}>
            { 
              sortOptions.map(sortBy => {
                return (<option value={sortBy}>{sortBy}</option>)
              })
            }
          </select> */}
        </div>
        <div id='resulting-quantity'>
          <span>{ resultingQuantity } product{ resultingQuantity == 1 ? '' : 's' }</span>
        </div>
      </div>
      <div id='products'></div>
    </body>
    </>
  )
}

const GetUi = () => {
  const client = ShopifyBuy.buildClient({
    domain: `${SHOPIFY_SHOP_NAME}.myshopify.com`,
    storefrontAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN
  });
  const ui = ShopifyBuy.UI.init(client)
  return ui
}

const SortActiveProducts = (products, sortBy) => {
  switch (sortBy) {
    case 'Featured':
      return products // no effect right now because no products are in the Featured collection
    case 'Best Selling':
      return CountProductSales(products)
    case 'Alphabetically, A-Z':
      break;
    case 'Alphabetically, Z-A':
      break;
    case 'Price, low to high':
      break;
    case 'Price, high to low':
      break;
    case 'Date, old to new':
      break;
    case 'Date, new to old':
      break;
  }
}

const CountProductSales = async (products) => {
  const res = await axios.get('http://localhost:3000/api/orders')
  const orders = res.data
  console.log(orders)

  let productSales = {}
  for (const product of products) {
    productSales = {
      [product.id]: 0,
      ...productSales
    }
  }

  for (const order of orders) {
    for (const lineItem of order.line_items) {
      productSales[lineItem.product_id] += 1
    }
  }

  const sortedProductSales = Object.entries(productSales)
    .sort(([,a],[,b]) => b-a)
  console.log(sortedProductSales)

  let sortedProducts = []
  for (const sales in sortedProductSales) {
    for (const product of products) {
      if (product.id === sales[0]) sortedProducts.push(product)
    }
  }
  
  console.log(sortedProducts)
  return sortedProducts
}

const GetProductTags = products => {
  // console.log(productDetails)
  let tagNames = ['All products']
  let tagProducts = [products]
  for (const product of products) {
    const tagList = product.tags.split(', ')
    for (const tag of tagList) {
      if (!tagNames.includes(tag)) {
        tagProducts[tagNames.length] = []
        tagNames.push(tag)
      }
      tagProducts[tagNames.indexOf(tag)].push(product)
    }
  }
  return {
    names: tagNames,
    products: tagProducts
  }
}

const GetProductTitles = products => {
  const titles = products.map(product => product.title)
  titles.sort()
  return titles
}

const RenderProducts = (products, ui) => {
  console.log(products)
  const productIds = products.map(product => product.id)
  ui.createComponent('productSet', {
    node: document.getElementById('products'),
    id: productIds,
    options: {
      cart: {
        // iframe: false,
        popup: false
      },
      product: {
        width: '30%',
        // iframe: false,
        buttonDestination: 'modal',
        isButton: true,
        contents: {
          title: true,
          img: true,
          // imgWithCarousel: true,
          price: true,
          description: false,
          options: false,
          button: false
        },
        styles: {
          product: {
            'position': 'relative',
            'display': 'flex',
            'flex-direction': 'column',
            'min-width': '30.2%',
            'border': '1px solid rgba(196, 194, 194, 0.2)',
            'border-radius': '20px',
            'box-shadow': '0px 0px 20px 10px rgba(216, 216, 216, 0.4)',
            'background-color': 'white',
            'margin-bottom': '30px',
            'padding-bottom': '20px',
            'margin-right': '15px',
            'margin-left': '15px',
            'transition': 'transform 0.3s ease-in-out',     

            ':hover': {
              'cursor': 'pointer',
              'transform': 'translate(0px, -10px)'
            }
          }
        }
      },
      productSet: {
        contents: {
          pagination: false
        },
        styles: {
          products: {
            'padding-top': '100px',
            'display': 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'flex-start',
            'width': '80%',
            'margin': 'auto'
          }
     
        }
      }
    }
  })
}

const DestroyProducts = (products, ui) => {
  const productIds = products.map(product => product.id)
  ui.destroyComponent('productSet', {
    id: productIds
  })
}

