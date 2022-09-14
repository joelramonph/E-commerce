import React from 'react'

const ProductPurchase = ({ product }) => {
  return (
   <li className='card__purchase-item'>
        <h4 className='card__purchase-name'>{product.title}</h4>
        <span className='card__purchase-quantity'>{product.productsInCart.quantity}</span>
        <span card__purchase-price>{product.price}</span>

   </li>
  )
}

export default ProductPurchase