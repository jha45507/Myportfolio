import Link from 'next/link'
import React, { useRef } from 'react'
import { ImUser } from 'react-icons/im';
function Navbar() {
    const headeRef = useRef();
    const hamRef = useRef();

    const hamclick = () => {
        if (hamRef.current.classList.contains('ham')) {
            hamRef.current.classList.toggle('ham-active')
        }
        if (headeRef.current.classList.contains('h-16')) {
            headeRef.current.classList.replace('h-16', 'h-[60vh]')
        }

        else if (headeRef.current.classList.contains('h-[60vh]')) {
            headeRef.current.classList.replace('h-[60vh]', 'h-16')
        }
    }

    const closeNavbar = () => {
        headeRef.current.classList.replace('h-[60vh]', 'h-16')
        hamRef.current.classList.remove('ham-active')
    }

    return (
        <>
            <header ref={headeRef} className=' w-screen absolute   min-w-[375px] bg-black md:sticky md:top-0 h-16 overflow-hidden transition-all z-10'>
                <div onClick={hamclick} className='md:hidden w-5 h-5 absolute top-5 right-5 scale-75'>
                    <div className='ham' ref={hamRef}></div>
                </div>
                <nav className='md:px-5 text-white md:flex md:justify-between bg-black md:py-4 flex flex-col md:flex-row '>
                    <ul className='center py-4 md:py-0 bg-black'>
                        <li className='space-y-5'>
                            <Link href={"/"}><span onClick={closeNavbar} className='center space-x-2 text-2xl font-bold sm:absolute md:relative sm:left-5 md:left-0' ><ImUser className='text-purple-500' />
                                <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ' >Rahul Jha</h1></span></Link>
                        </li>
                    </ul>
                    <ul className='center space-y-5 text-lg sm:mt-8 md:mt-0'>
                        <li className='md:space-x-5 lg:space-x-10 flex flex-col md:flex-row space-y-5 md:space-y-0 text-gray-200 '>
                            <span onClick={closeNavbar} className='hover:border-white w-fit border-b-2 border-transparent ' ><Link href={"/"} >Home</Link></span>
                            <span onClick={closeNavbar} className='hover:border-white w-fit border-b-2 border-transparent ' ><Link href={"/project"} >Projects</Link></span>
                            <span onClick={closeNavbar} className='hover:border-white w-fit border-b-2 border-transparent ' ><Link href={"/about"} >About Us</Link></span>
                            <span onClick={closeNavbar} className='hover:border-white w-fit border-b-2 border-transparent ' ><Link href={"/skil"} >Skills</Link></span>
                        </li>
                    </ul>
                    <ul className='py-0 center my-5 md:my-0'>
                        <li onClick={closeNavbar} className=' rounded-3xl text-black font-bold px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 '>
                            <Link href={"/contact"} >Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Navbar