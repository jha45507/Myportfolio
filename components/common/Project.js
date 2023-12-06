import React from 'react'

const Project = (props) => {
    return (
        <div className='w-[320px] h-[80vh] border-pink-300 rounded-lg projectbox mb-20 border md:mx-5 p-5'>
            <h1 className='text-white text-xl font-bold mb-4'>{props.name}</h1>
            <a target="_blank" rel="noopener noreferrer" href={props.href} >
                <img className='border border-[#06b6d4] p-2 sm:w-4/4 lg:w-auto rounded-2xl'
                    src={props.img} alt={props.alt}
                />
            </a>
            <p className=' text-white my-3 text-justify'> <span className='font-bold'>Tech</span>{props.tech}</p>
            <p className='text-white my-3 text-justify'> <span className='font-bold'>Functionality</span>{props.func}</p>
        </div>
    )
} 

export default Project