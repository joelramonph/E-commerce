import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import "/src/App.css"


const CardHome = ({ product }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  //Agrega producto al carrito
  const handleAddCart = e => {
    e.stopPropagation()
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: product.id,
      quantity: 1
    }
    axios.post(URL,obj,getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
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
        <button onClick={handleAddCart} className='card__home-btn'><i className="fa-solid fa-cart-plus"></i></button>
      </div>
    </article>
  )
}

export default CardHome