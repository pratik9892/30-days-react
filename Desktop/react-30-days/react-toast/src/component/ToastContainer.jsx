import React, { useRef, useState } from 'react'

const ToastContainer = () => {

    const [toasts,setToast] = useState([])
    const timeRefs = useRef({})

    const handleShow = (message,type) => {
        const id = new Date().getTime()
        const newToast = [...toasts,{id,message,type}]
        setToast(newToast)
        timeRefs.current[id] = setTimeout(() => handleClose(id) ,2000)
       
    }

    const handleClose = (id) => {
        clearTimeout(timeRefs.current[id])
        delete timeRefs.current[id]
        setToast((prev) => {
            const filArr = prev.filter((toast) => {
                return toast.id != id
            } )
            return filArr
        })
    }


  return (
    <div className='container p-10 '>
        <div className='toast-container fixed right-4 flex flex-col gap-2'>
            {toasts.length > 0  && 
                ( toasts.map(({id,message,type}) => {
                    return <div key={id} className={`
                    flex items-center justify-between text-white px-4 py-2 w-56 rounded-xl animate-slide
                    ${type == "success"? "bg-green-500" : type == "info" ? "bg-blue-500" : type == "warning" ? "bg-orange-500" : "bg-red-600"}
                    `}>
                    <p>{message}</p>
                    <p className='cursor-pointer' onClick={() => handleClose(id)}>x</p>
                </div>
                }))}
        </div>
        <div className='btn-container flex gap-4 '>
            <button className='border-2 border-black px-4 py-2 rounded-xl' onClick={() => handleShow("Success" , "success")}>Succes</button>
            <button className='border-2 border-black px-4 py-2 rounded-xl' onClick={() => handleShow("Info" , "info")}>Info</button>
            <button className='border-2 border-black px-4 py-2 rounded-xl' onClick={() => handleShow("Warning" , "warning")}>Warning</button>
            <button className='border-2 border-black px-4 py-2 rounded-xl' onClick={() => handleShow("Error" , "error")}>Error</button>
        </div>
    </div>
  )
}

export default ToastContainer