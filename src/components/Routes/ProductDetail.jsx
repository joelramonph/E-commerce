import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/ProductDescription'
import SimilarProducts from '../productDetail/SimilarProducts'

const ProductDetail = () => {

  const [productInfo, setProductInfo] = useState()
  
  const { id } = useParams()

useEffect(() => {
  const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
  axios.get(URL)
  .then(res => setProductInfo(res.data.data.product))
  .catch(err => console.log(err))

  
}, [])

console.log(productInfo)

  return (
    <main className='product__detail'>
      <ProductDescription 
      productInfo={productInfo}

      />
      <SimilarProducts 
        productInfo={productInfo}
      />
    </main>
  )
}

export default ProductDetail