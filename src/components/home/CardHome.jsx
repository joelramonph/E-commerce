import React from 'react'
import { useNavigate } from 'react-router-dom'
import "/src/App.css"
const CardHome = ({ product }) => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <article onClick={handleClick} className='card__home'>
      <header className='card__home-header'>
        <img className='card__home-img' src={product.productImgs} alt="" />
      </header>
      <div className='card__home-body'>
        <h3 className='card__home-name'>{product.title}</h3>
        <section className='card__home-price'>
        <h4 className='card__home__price-label'>Price</h4>
        <span className='card__home__price-value'>$ {product.price}</span>

        </section>
        <button className='card__home-btn'><i className="fa-solid fa-cart-plus"></i></button>
      </div>
    </article>
  )
}

export default CardHome