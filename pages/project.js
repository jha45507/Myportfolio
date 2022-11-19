import Link from 'next/link'
import React from 'react'

export default function Project() {
    return (
        <div className=' flex flex-col justify-center w-full h-full min-w-[375px]'>
            <div className='mb-28 mt-20'>
                <h1 className=' py-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl text-center'>Project
                <span className='py-2 text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl text-center text-white'> I have done</span></h1>
            </div>

            <div className='flex flex-col justify-center items-center mx-10 '>

                <div className='lg:flex w-full'>

                    <div className=' mx-auto lg:mx-10 border sm:w-3/4 border-pink-300 px-5 py-5 rounded-lg projectbox mb-20'>

                        <div className=''>
                            <a target="_blank" rel="noopener noreferrer" href={'https://mynewsone.netlify.app'} >
                                <img className='border border-[#06b6d4] lg:p-2 sm:w-4/4 lg:w-auto p-5 rounded-2xl' src="/news.png" alt="news" />
                            </a>
                        </div>
                        <p className=' text-white my-3 text-justify ' > Teck: Strapi Api, ReactJs, NodeJs, JavaScript</p>
                        <p className=' text-white my-3 text-justify ' > Functionality: Infinite Scroller, Loading bar, Next and Previous button, Design with Card, and click to 'ReadMore' button to open a particular post.</p>
                    </div>

                    <div className='mx-auto lg:mx-10 border sm:w-3/4 border-pink-300 px-5 py-5 rounded-lg projectbox mb-20 '>

                        <div className=''>
                            <a target="_blank" rel="noopener noreferrer" href={'https://with-react-text-editor.netlify.app'} >
                                <img className='border border-[#06b6d4] lg:p-2 sm:w-4/4 lg:w-auto p-5  rounded-2xl' src="/editor.png" alt="editer" />
                            </a>
                        </div>
                        <p className=' text-white my-3 text-justify ' > Teck: ReactJs, JavaScript, NodeJs, </p>
                        <p className=' text-white my-3 text-justify ' > Functionality: with text can be uppercase, lowercase, reverse, copy, clear extra spaces, capital first letter, count words, count characters, and show preview.</p>
                    </div>

                    <div className='mx-auto lg:mx-10 border sm:w-3/4 border-pink-300 px-5 py-5 rounded-lg projectbox mb-20 '>
                        <div className=''>
                            <a target="_blank" rel="noopener noreferrer" href={'https://soft-notes-book-with-mern.netlify.app'} >
                                <img className='border border-[#06b6d4] lg:p-2 sm:w-4/4 lg:w-auto p-5  rounded-2xl' src="/notes.png" alt="notes" />
                            </a>
                        </div>
                        <p className=' text-white my-3 text-justify ' > Teck: MongoDB, ExpressJs, ReactJs, NodeJs (MERN) </p>
                        <p className=' text-white my-3 text-justify ' > Functionality: create notes, update notes, read notes, delete notes, and with an authentication token save notes.</p>
                    </div>

                </div>

                <div className=' lg:flex mx-5 lg:my-10 lg:w-[60%] w-full'>
                    <div className='mx-auto lg:mx-10 border sm:w-3/4 border-pink-300 px-5 py-5 rounded-lg projectbox mb-20 '>
                        <div className=''>
                            <a target="_blank" rel="noopener noreferrer" href={'https://events-calendar-javascript-project.netlify.app'} >
                                <img className='border border-[#06b6d4] lg:p-2 sm:w-4/4 lg:w-auto p-5  rounded-2xl' src="/calendar.png" alt="calendar" />
                            </a>
                        </div>
                        <p className=' text-white my-3 text-justify ' > Teck: JavaScript, Bootstrap</p>
                        <p className=' text-white my-3 text-justify ' > Functionality: In this events calendar Add Entries, Read Entries, Delete Entries, and Save Entries with Start date, End date, and Time. They save to local storage.</p>
                    </div>

                    <div className='mx-auto lg:mx-10 border sm:w-3/4 border-pink-300 px-5 py-5 rounded-lg projectbox mb-20 '>
                        <div className=''>
                            <a target="_blank" rel="noopener noreferrer" href={'https://analogclock-html-css-javascript.netlify.app'} >
                                <img className='border border-[#06b6d4] lg:p-2 sm:w-4/4 lg:w-auto p-5  rounded-2xl' src="/clock.png" alt="clock" />
                            </a>
                        </div>
                        <p className=' text-white my-3 text-justify ' > Teck: Html, Css, JavaScript </p>
                        <p className=' text-white my-3 text-justify ' > Functionality: both functions are the Digital clock and can wall clock and set the alarm.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
