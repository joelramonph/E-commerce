import React from 'react'

const ProductCardInfo = () => {
  return (

    <article className='cart__item'>
        <header className='cart__item-header'>

        <h4 className='cart__category'>Samsung</h4>
        <h3 className='cart__name'>Samsung Galaxy S22</h3>
      
        </header>

        <i className="fa-solid fa-trash"></i>

        <span className='cart__quantity'>1</span>
        <footer className='cart__footer'>
          <span className='cart__total-label'>Total:</span>
          <p className='cart__total-number'>850</p>
        </footer>

    </article>
    
  )

}

export default ProductCardInfo