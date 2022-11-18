import Link from 'next/link';
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg';
function HomePage() {
  return (
    <>
      <div className='container grid md:grid-cols-2 md:h-[89vh] md:flex-row md:py-10 m-auto min-w-[375px]'>

        <div className='center w-full h-screen md:h-full'>

          <div className=' md:scale-100 sm:scale-125 '>

            <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl py-2 2xl:text-center'> Hi,<br /> I Am Rahul Jha <br />Full Stack / MERN <br /> Stack Developer </h1>
            <h3 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold sm:text-center '>Welcome to my portfolio website</h3>
            <p className='text-white mt-2 mb-5 sm:text-center xl:text-xl '> I have six months plush of self-work experience. 
            </p>

            <Link href={'/contact'}>
              <button className='w-full shadow-gdnt relative md:m-0 md:scale-100 scale-[0.8] text-xl sm:text-2xl text-white font-bold rounded-full center m-auto px-8 py-3 md:py-1 '><p className='mr-8'>Contect Me</p>
                <CgArrowLongRight className='bg-white rounded-full text-black absolute p-2 right-1 md:w-10 md:h-9 w-12 h-12' /></button>
            </Link>

          </div>

        </div>

        <div className=' w-3/4 center md:w-[55%] m-auto my-24 md:my-10 '>

          <img className='w-80 boxblock rounded-xl' src="/rahul-img.jpg" alt="" />

        </div>

      </div>
    </>
  )
}

export default HomePage