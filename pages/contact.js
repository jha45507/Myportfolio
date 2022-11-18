import Link from 'next/link'
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { AiOutlineMail } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { MdSubject } from 'react-icons/md'
import { BsChatLeftText } from 'react-icons/bs'
import { TbPhone } from 'react-icons/tb'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'

function Contact() {
    return (
        <div className='center md:h-[90vh]'>
            <div className='flex flex-col justify-center md:flex-row min-w-[375px] w-[90%]'>

                <div className=' flex justify-center w-full md:w-2/4'>

                    <div className=' sm:scale-100 scale-90 w-[75%] md:w-3/4'>

                        <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl py-2 2xl:text-center'> Reach Us Hare!</h1>
                        <p className='text-white text-lg my-5'>This contact us page connects to the database API and saves your information to my database.</p>

                        <Link href={'https://www.linkedin.com/in/rahul-jha-385589218/'}>
                            <span className='relative' ><BsLinkedin className='text-gray-300 inline absolute top-2 left-0' />
                                <p className='text-white my-2 mb-5 mx-10'>https://www.linkedin.com/in/rahul-jha-385589218/</p></span>
                        </Link>

                        <Link href={'https://github.com/jha45507'}>
                            <span className='relative' ><GoMarkGithub className='text-gray-300 inline absolute top-2 left-0' />
                                <p className='text-white mb-5 mx-10'>https://github.com/jha45507</p></span>
                        </Link>

                        <span className='relative' ><AiOutlineMail className='text-gray-300 inline absolute top-2 left-0' />
                            <p className='text-white my-2 mb-5 mx-10'>jha45507@gmail.com </p></span>

                        <span className='relative' ><TbPhone className='text-gray-300 inline absolute top-2 left-0' />
                            <p className='text-white mb-5 mx-10'> +91 82239 - 83904 / +91 88392 - 42653 </p>
                        </span>
                    </div>

                </div>

                <div className='md:w-2/4 w-full flex justify-center'>

                    <form className="md:w-[90%] w-[75%] bg-zinc-800 mb-5 py-6 px-4 flex flex-col justify-center  ">

                        <div className="flex flex-wrap mb-6">

                            <div className="w-full px-3 relative  ">

                                <CiUser className='text-gray-300 inline absolute top-4 left-6' />
                                <input className="appearance-none block w-full bg-[#222] focus:bg-[#222] text-gray-300 indent-6 py-3 px-4  leading-tight outline-none " type="text" placeholder="Name" />

                            </div>

                        </div>

                        <div className="flex flex-wrap mb-6">

                            <div className="w-full px-3 relative">

                                <AiOutlineMail className='text-gray-300 inline absolute top-4 left-6' />
                                <input className="appearance-none block w-full bg-[#222] focus:bg-[#222] text-gray-300 indent-6 py-3 px-4  leading-tight outline-none  focus:border-gray-500" type="email" placeholder="Email" />

                            </div>

                        </div>

                        <div className="flex flex-wrap mb-6">

                            <div className="w-full px-3 relative">

                                <MdSubject className='text-gray-300 inline absolute top-4 left-6' />
                                <input className="appearance-none block w-full bg-[#222] focus:bg-[#222] text-gray-300 indent-6 py-3 px-4 leading-tight outline-none  focus:border-gray-500" type="text" placeholder="Subject" />
                            </div>

                        </div>

                        <div className="flex flex-wrap mb-6">

                            <div className="w-full px-3 relative">

                                <BsChatLeftText className='text-gray-300 inline absolute top-4 left-6' />
                                <textarea className=" no-resize appearance-none block w-full bg-[#222] focus:bg-[#222] text-gray-300 indent-6 py-3 px-4  leading-tight outline-none  focus:border-gray-500 h-36 resize-none" placeholder="Message"  ></textarea>

                            </div>

                        </div>

                        <div className="">
                            <button className='w-full shadow-gdnt m-auto md:m-0 scale-[0.8] py-2 text-xl font-bold text-white rounded-full center relative '><p className='mr-8'>Submit Now</p>
                                <CgArrowLongRight className='bg-white rounded-full text-black absolute p-2 right-1  w-10 h-10' />
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}
export default Contact