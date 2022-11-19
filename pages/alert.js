import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { ImCross } from 'react-icons/im'


function Alert() {

  return (
    <div className=' relative center bg-gradient-to-r from-cyan-500 via-lime-300 to-green-500 w-72 h-14 rounded-lg'>
      <p className=' w-30 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-2xl inline-block ' >
        form submited
      </p>
      <IoMdCheckmarkCircleOutline className=' w-7 h-7 text-white absolute left-1 ' />
      <ImCross className=' w-5 h-5 text-white absolute right-2 ' />
    </div>
  )
}
export default Alert;