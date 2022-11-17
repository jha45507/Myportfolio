import Link from 'next/link';
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg';
function HomePage() {
  return (
    <>
      <div className='container m-auto grid md:grid-cols-2 md:h-[89vh] md:flex-row reverse py-10'>
        <div className='center'>
          <div className=' scale-90 sm:scale-100 '>
            <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold py-2'> Hi, I Am Rahul Jha <br />Full Stak/MERN Stack Developer </h1>
            <h3 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold my-5 '>Welcome to my portfolio website</h3>
            <Link href={'/contact'}>
            <button className='shadow-gdnt m-auto md:m-0 scale-[0.8] px-8 my-3 py-3 text-2xl font-bold text-white rounded-full center relative '><p className='mr-8'>Contect Me</p>
            <CgArrowLongRight className='bg-white rounded-full text-black absolute p-2 right-1  w-12 h-12' />
            </button></Link>

          </div>
        </div>

        <div className=' md:w-2/4 center w-3/4 m-auto my-10'>
          <img className='w-80 boxblock rounded-xl' src="/rahul-img.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default HomePage