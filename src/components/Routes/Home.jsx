import React from 'react'
import {  useSelector } from 'react-redux';

import CardHome from '../home/CardHome';
import Search from '../shared/Search';


const Home = () => {

 

const products = useSelector(state => state.products)
console.log(products)

  return (
    <div className='home'>
       
      <Search />
      <div className='home__container-card'>
      
      {
        products?.map(product => (
          
          <CardHome 
            key={product.id}
            product={product}
          />
        ))
      } 
      </div>
    
    </div>
  )
}

export default Home