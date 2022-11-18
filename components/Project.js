import Link from 'next/link'
import React from 'react'

export default function Project() {
    return (
        <div className=' flex flex-col justify-center my-20 w-full h-full min-w-[375px]'>
            <div>
                <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl py-2 text-center my-5'>Project
                <span className='text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl py-2 text-center text-white'> I have done</span></h1>
            </div>

            <div className='flex flex-col justify-center items-center mx-10 '>

                <div className='lg:flex my-10 w-full'>

                    <div className='mx-10 border sm:w-3/4 border-pink-300 px-5 py-5 rounded-lg projectbox mb-20'>

                        <div className=''>
                            <Link href={'https://mynewsone.netlify.app'} >
                                <img className='border border-[#06b6d4] lg:p-2 sm:w-4/4 lg:w-auto p-5 rounded-2xl' src="/news.png" alt="news" />
                            </Link>
                        </div>
                        <p className=' text-white my-3 text-justify ' >this is website to click and check-out this is image my project to reach links</p>
                    </div>

                    <div className='mx-10 border sm:w-3/4 border-pink-300 px-5 py-5 rounded-lg projectbox mb-20 '>

                        <div className=''>
                            <Link href={'https://with-react-text-editor.netlify.app'} >
                                <img className='border border-[#06b6d4] lg:p-2 sm:w-4/4 lg:w-auto p-5  rounded-2xl' src="/editor.png" alt="editer" />
                            </Link>
                        </div>
                        <p className=' text-white ' >this is website to click and check-out</p>
                    </div>

                    <div className='mx-10 border sm:w-3/4 border-pink-300 px-5 py-5 rounded-lg projectbox mb-20 '>
                        <div className=''>
                            <Link href={'https://soft-notes-book-with-mern.netlify.app'} >
                                <img className='border border-[#06b6d4] lg:p-2 sm:w-4/4 lg:w-auto p-5  rounded-2xl' src="/notes.png" alt="notes" />
                            </Link>
                        </div>
                        <p className=' text-white ' >this is website to click and check-out</p>
                    </div>

                </div>

                <div className=' lg:flex mx-5 lg:my-10 lg:w-[60%] w-full'>
                    <div className='mx-10 border sm:w-3/4 border-pink-300 px-5 py-5 rounded-lg projectbox mb-20 '>
                        <div className=''>
                            <Link href={'https://events-calendar-javascript-project.netlify.app'} >
                                <img className='border border-[#06b6d4] lg:p-2 sm:w-4/4 lg:w-auto p-5  rounded-2xl' src="/calendar.png" alt="calendar" />
                            </Link>
                        </div>
                        <p className=' text-white ' >this is website to click and check-out</p>
                    </div>

                    <div className='mx-10 border sm:w-3/4 border-pink-300 px-5 py-5 rounded-lg projectbox mb-20 '>
                        <div className=''>
                            <Link href={'https://analogclock-html-css-javascript.netlify.app'} >
                                <img className='border border-[#06b6d4] lg:p-2 sm:w-4/4 lg:w-auto p-5  rounded-2xl' src="/clock.png" alt="clock" />
                            </Link>
                        </div>
                        <p className=' text-white ' >this is website to click and check-out</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
