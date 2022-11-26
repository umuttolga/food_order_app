import React from 'react'

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label className='font-bold mr-4' htmlFor={props.input.id}>{props.label}</label>
      <input className='pl-1 w-12 rounded-lg border text-center' ref={ref} {...props.input} />
    </div>
  )
})

export default Input
