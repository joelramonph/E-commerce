import React from 'react'
import "./styles/style.css"


const Search = () => {
  return (
    <div className='search__container'>
        <input className='search__text' type="text" placeholder='What are you looking for?' />
        <label className='search__label' htmlFor=""><i class="fa-solid fa-magnifying-glass"></i></label>
    </div>
  )
}

export default Search