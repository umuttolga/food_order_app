import React, { useContext } from 'react'
import MealItemFrom from './MealItemFrom'
import Context from '../../store/Context'

const MealsListItems = (props) => {
    const cartCtx = useContext(Context);
    const price = `$${props.price.toFixed(2)}`
    const addToCart = (amount) => {
      cartCtx.addItem({
        name: props.name,
        amount: amount,
        price: props.price,
        id: props.id
      })
    }
    
  return (
    <li className='m-1 p-[1rem] flex justify-between items-center '>
        <div>
        <div>
            <h3 className='text-lg font-bold'>{props.name}</h3>
        </div>
        <div className='italic text-med '>{props.description}</div>
        <div className='mt-1 text-xl text-[#ad5502] font-bold'>{price}</div>
        </div>
        <div>

            <MealItemFrom onAddItem={addToCart}/>
        </div>
    </li>
  )
}

export default MealsListItems
