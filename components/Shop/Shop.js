import { useEffect, useState } from 'react'


export const Shop = ({allProducts, orders}) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ tagNames, setTagNames ] = useState([])
  const [ tagProducts, setTagProducts ] = useState([])
  const [ activeProducts, setActiveProducts ] = useState([])
  const [ resultingQuantity, setResultingQuantity ] = useState(0)

  useEffect(() => {
    const tags = GetProductTags(allProducts)
    setTagNames(tags.names)
    setTagProducts(tags.products)

    RenderProducts(allProducts, GetUi())
    setActiveProducts(allProducts)
    setResultingQuantity(allProducts.length)

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

  return (
    <>
      <div id="shop-page-container">
        <div id="shop-title-container">
          <h1 id="title">Products</h1>
        </div>
        <div id='shop-filter-bar'>
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
        <div id="products"></div>
      </div>
    </>
  )
}

const GetUi = () => {
  const client = ShopifyBuy.buildClient({
    domain: `${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com`,
    storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
  });
  const ui = ShopifyBuy.UI.init(client)
  return ui
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

const RenderProducts = (products, ui) => {
  console.log(products);
  const productIds = products.filter(product => product.status == "active")
                             .map(product => product.id)
                             
  console.log(productIds)
  ui.createComponent('productSet', {
    node: document.getElementById('products'),
    id: productIds,
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
          button: 'ADD TO CART',
          outOfStock: 'OUT OF STOCK'
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
        isButton: true,
        contents: {
          title: true,
          img: true,
          price: true,
          description: false,
          options: false,
          button: false
        },
        styles: {
          title: {
            'color': '#124658',
            'font-size': '22px',
            'padding-left': '10px',
            'padding-right': '10px',
            'font-weight': '200'
          },
          price: {
            'color': '#124658',
            'font-size': '16px',
            'font-weight': '800',
          },
          product: {
            'position': 'relative',
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'space-between',
            'min-width': '12%',
            'height': 'auto',
            'border': '1px solid rgba(196, 194, 194, 0.2)',
            'box-shadow': '10px 10px 20px 10px rgba(167, 167, 167, 0.4)',
            'border-radius': '15px',
            'background-color': '#F6F1E9',
            'margin-right': '10px',
            'margin-left': '10px',
            'transition': 'all 0.3s ease-in-out',     
            'font-family': 'Source Sans Pro, sans-serif',

            ':hover': {
              'cursor': 'pointer',
              'transform': 'scale(1.04)',
              'opacity': '0.8',
            },
          },
          blockButton: {
            ':focus': {
              'outline': '0 !important',
            }
          }
        }
      },
      modal: {
        styles: {
          modal: {
            'margin-top': '20px',
          },
          close: {
            'margin-top': '20px',
            'color': 'black'
          }
        }
      },
      productSet: {
        contents: {
          pagination: false
        },
        styles: {
          products: {
            'padding-top': '50px',
            'padding-bottom': '100px',
            'display': 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'flex-start',
            'width': '84%',
            'margin': 'auto'
          }
     
        }
      },
    }
  })
}

const DestroyProducts = (products, ui) => {
  const elem = document.createElement('div');
  elem.setAttribute("id", "products");
  document.getElementById('shop-page-container').appendChild(elem);

  const productIds = products.map(product => product.id)
  ui.destroyComponent('productSet', {
    id: productIds
  })
}


