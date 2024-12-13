import React from 'react'

const Toast = ({id,type,handleClose,message}) => {
  return (
    <div key={id} className={`
        flex items-center justify-between text-white px-4 py-2 w-56 rounded-xl animate-slide
        ${type == "success"? "bg-green-500" : type == "info" ? "bg-blue-500" : type == "warning" ? "bg-orange-500" : "bg-red-600"}
        `}>
        <p>{message}</p>
        <p className='cursor-pointer' onClick={() => handleClose(id)}>x</p>
    </div>
  )
}

export default Toast