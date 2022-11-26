import React, { Fragment } from 'react'
import MealsSum from './MealsSum'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
  return (
    <Fragment>
      <MealsSum/>
      <AvailableMeals/>
    </Fragment>
  )
}

export default Meals
