import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'



const Overlay = (props) => {
    return <div className='p-4 rounded-xl shadow-2xl z-30 fixed top-[20rem] left-[30%] w-[45%] m-auto bg-white'>
        <div className='content'>{props.children}</div>
    </div>
}
const BackDrop = (props) => {
    return <div onClick={props.close} className='bg-black opacity-75 top-0 left-0 z-20  fixed w-[100%] h-[100vh] bg-[ rgba(0, 0, 0, 0.75)]'>
    </div>
}

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop close={props.close}/>, document.getElementById('overlay-root'))}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay-root'))}
    </Fragment>
  )
}

export default Modal
