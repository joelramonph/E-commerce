import React from 'react'
import ProductCardInfo from '../cart/ProductCardInfo'
import { useEffect, useState } from 'react'
import axios from 'axios'
import getConfig from '../../utils/getConfig'

const Cart = () => {

  const [cartProducts, setCardProducts] = useState();

useEffect(() => {

  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
  axios.get(URL, getConfig())
  .then(res => setCardProducts(res.data))
  .catch(err => console.log(err))
}, [])

console.log(cartProducts)



  return ( 
  <section className='cart'>
    <h2 className='cart__title'>Cart</h2>
    <ProductCardInfo />
    <hr className='cart__hr' />
    <footer className='cart__footer'>
      <span className='cart__total-global-label'>Total:</span>
      <p className='cart__total-global-label-value'>1350</p>
      <button className='cart__btn'>Checkout</button>
    </footer>
  </section>
   
  )
}

export default Cart