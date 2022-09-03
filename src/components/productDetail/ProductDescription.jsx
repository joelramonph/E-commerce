import React from 'react'
import { useState } from 'react'

const ProductDescription = ({productInfo}) => {

const [counter, setCounter] = useState(1)

const handlePlus = () => setCounter(counter + 1)

const handleMinus = () =>{
    if(counter -1 >= 1 ) {
        
        setCounter(counter - 1)
    }
} 
    
    
  return (
    <section className='product__desc'>
        <h2 className='produc__desc-name'>{productInfo?.title}</h2>
        <p className='produc__info-description'>{productInfo?.description}</p>
        <div className='product__info-body'>
            <article className='product__info-price'>
                <h3 className='product__info-price-label'>Price</h3>
                <span className='product__info-price-value'>{productInfo?.price}</span>
            </article>
            <article className='product__info-quantity'>
                <h3 className='product__info-quantity-label'>Quantity</h3>
                <div className='product__info-quantity-'>
                    <button onClick={handleMinus}>-</button>
                    <div>{counter}</div>
                    <button onClick={handlePlus}>+</button>
                   
                </div>
            </article>
        </div>

    </section>
  )
}

export default ProductDescription