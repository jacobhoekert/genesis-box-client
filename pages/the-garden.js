import { useEffect } from 'react'
import axios from 'axios'

const TheGarden = () => {

  useEffect( () => {
    axios.get('http://localhost:3000/api/blogs')
      .then(data => console.log(data))
  },[])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default TheGarden