import React from 'react'

const ProductCardInfo = ({product}) => {
  return (

    <article className='cart__item'>
        <header className='cart__item-header'>

        <h4 className='cart__category'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
      
        </header>

        <i className="fa-solid fa-trash"></i>

        <span className='cart__quantity'>{product.productsInCart.quantity}</span>
        <footer className='cart__footer'>
          <span className='cart__total-label'>Total:</span>
          <p className='cart__total-number'>{product.price}</p>
        </footer>

    </article>
    
  )

}

export default ProductCardInfo