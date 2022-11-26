import React from 'react'

const Card = (props) => {
  return (
    <div className='m-auto mt-4 shadow-xl px-4 bg-white rounded-xl'>
      {props.children}
    </div>
  )
}

export default Card
