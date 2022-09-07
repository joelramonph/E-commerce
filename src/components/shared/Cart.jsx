import React from 'react'
import ProductCardInfo from '../cart/ProductCardInfo'
import { useEffect, useState } from 'react'
import axios from 'axios'
import getConfig from '../../utils/getConfig'

const Cart = () => {

  const [cartProducts, setCardProducts] = useState();

  const getAllProductsCart = () => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
    .then(res => setCardProducts(res.data.data.cart.products))
    .catch(err => setCardProducts())

  }

useEffect(() => {
  getAllProductsCart()
}, [])


const handleCheckout = () => {
  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
  const obj = {
    street: "Green St. 1456",
    colony: "Southwest",
    zipCode: 12345,
    city: "USA",
    references: "Some references"
  }
  axios.post(URL,obj, getConfig())
  .then(res => {
    console.log(res.data)
    getAllProductsCart()
  })

  .catch(err => console.log(err))
}


  return ( 
  <section className='cart'>
    <h2 className='cart__title'>Cart</h2>
    <div className='cart__container-item'>
      {
        cartProducts?.map(product => (
         <ProductCardInfo 
           key={product.id}
           product={product}
         />
        ))
      }
    </div>

    <hr className='cart__hr' />
    <footer className='cart__footer'>
      <span className='cart__total-global-label'>Total:</span>
      <p className='cart__total-global-label-value'>1350</p>
      <button onClick={handleCheckout} className='cart__btn'>Checkout</button>
    </footer>
  </section>
   
  )
}

export default Cart