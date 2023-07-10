import React from 'react'
import "./Category.css";
import Salad from '../../assets/salad.jpg'
import Vegies from '../../assets/Vegetables.jpg'
import Basket from '../../assets/Fruit basket.jpg'

function Category() {
  return (
    <div>
        <div className='category'>
            <h1>Categories</h1>

        <div className='categoryitem'>
            <div className='categoryimage'>
            <img src={Salad} alt="" /> 
            <p>Salad</p>
            </div>
            <div className='categoryimage'>
            <img src={Vegies} alt="" />
            <p>Salad</p>
            </div>
            <div className='categoryimage'>
            <img src={Salad} alt="" />
            <p>Salad</p>
            </div>
            <div className='categoryimage'>
            <img src={Basket} alt="" />
            <p>Salad</p>
            </div>
        </div>
        
        <h2>Made more fresh since  it's <br></br> #MadeWithNutriLife</h2>

       
            
        </div>
        
        
       
    </div>
  )
}

export default Category