import { useEffect, useState } from 'react'
import axios from 'axios'
import { GENESIS_BOX_PRODUCT_KEY } from '../../../config/keys'

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
      <div className="image-carousel"> 
        {/* <img src="/images/04_curatethegenesisbox_1.png"/> */}
      </div>
    </div>
  )
}