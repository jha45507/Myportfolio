import Link from 'next/link'
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { AiOutlineMail } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { MdSubject } from 'react-icons/md'
import { BsChatLeftText } from 'react-icons/bs'


function Contact() {
    return (
        <>
            <div className=' container m-auto grid px-5 sm:grid-cols-2 '>

                <div className='flex'>
                    <div className=' scale-90 sm:scale-100 '>
                        <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold py-2'> Hi, I Am Rahul Jha <br />Full Stak/MERN Stack Developer </h1>
                        <h3 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold my-5 '>Welcome to my portfolio website</h3>
                        

                    </div>
                </div>


                <form className="w-full max-w-lg  bg-zinc-800 p-10 mb-5  ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 relative  ">
                            <CiUser className='text-gray-300 inline absolute top-4 left-6' />
                            <input className="appearance-none block w-full bg-[#222] focus:bg-[#222] text-gray-300 indent-6 py-3 px-4  leading-tight outline-none " type="text" placeholder="Name" />

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 relative">
                            <AiOutlineMail className='text-gray-300 inline absolute top-4 left-6' />
                            <input className="appearance-none block w-full bg-[#222] focus:bg-[#222] text-gray-300 indent-6 py-3 px-4  leading-tight outline-none  focus:border-gray-500" type="email" placeholder="Email" />

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 relative">
                            <MdSubject className='text-gray-300 inline absolute top-4 left-6' />
                            <input className="appearance-none block w-full bg-[#222] focus:bg-[#222] text-gray-300 indent-6 py-3 px-4 leading-tight outline-none  focus:border-gray-500" type="text" placeholder="Subject" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 relative">
                            <BsChatLeftText className='text-gray-300 inline absolute top-4 left-6' />
                            <textarea className=" no-resize appearance-none block w-full bg-[#222] focus:bg-[#222] text-gray-300 indent-6 py-3 px-4  leading-tight outline-none  focus:border-gray-500 h-48 resize-none" placeholder="Message"  ></textarea>

                        </div>
                    </div>
                    <div className="">
                        <button className='w-full shadow-gdnt m-auto md:m-0 scale-[0.8]  py-2 text-xl font-bold text-white rounded-full center relative '><p className='mr-8'>Submit Now</p>
                            <CgArrowLongRight className='bg-white rounded-full text-black absolute p-2 right-1  w-10 h-10' />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Contact