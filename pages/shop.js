import { useEffect } from 'react'
import axios from 'axios'

const Shop = () => {

  useEffect( () => {
    axios.get('http://localhost:3000/api/products')
      .then(data => console.log(data))
  },[])

  return (
    <div>
      <h1>Shop</h1>
    </div>
  )
}

export default Shop