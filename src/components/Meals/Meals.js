import React from 'react'
import MealsSum from './MealsSum'
import AvailableMeals from './AvailableMeals'

const Meals = (props) => {
  return (
    <div onClick={props.closeOrderPage}>
      <MealsSum/>
      <AvailableMeals/>
    </div>
  )
}

export default Meals
