import Link from 'next/link';
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg';
function HomePage() {
  return (
    <>
      <div className='flex justify-center items-center w-full'>
        <div className='lg:flex justify-between items-center lg:w-full mx-10 mt-20'>
          <div className=' md:scale-100 sm:scale-125'>
            <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl py-2 2xl:text-center'> Hi,<br />I Am Rahul Jha<br />Front-End Developer</h1>
            <h3 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold sm:text-center '>Welcome to my portfolio website</h3>
            <p className='text-white mt-2 mb-5 sm:text-center xl:text-xl'> I have 2+ years of professional experience.
            </p>
            <Link href={'/contact'}>
              <button className='w-full shadow-gdnt relative md:m-0 md:scale-100 scale-[0.8] text-xl sm:text-2xl text-white font-bold rounded-full center m-auto px-8 py-3 md:py-1 '><p className='mr-8'>Contact Me</p>
                <CgArrowLongRight className='bg-white rounded-full text-black absolute p-2 right-1 md:w-10 md:h-9 w-12 h-12' /></button>
            </Link>
          </div>
          <div className='mt-44 lg:mt-0 center'>
            <img className='w-80 boxblock rounded-xl' src="/rahul-img.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className='mx-10 my-10'>
        <h3 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl py-2 text-center mt-20'>Work Introduction
        </h3>
        <p className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-10'>
          Professional Experience:
        </p>
        <p className='text-white mt-2 mb-5 xl:text-xl'>
          Sudofire Technologies, Gurugram (2 Years) October 2021 - October 2023
        </p>
        <h6 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Education:</h6>
        <p className='text-white mt-2 mb-5 xl:text-xl'>
          Bachelor of Business Administration, Jiwaji University, Gwalior 2020
        </p>
        <h3 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Summary:
        </h3>
        <p className='text-white mt-2 mb-5 text-justify xl:text-xl'>I&apos;m a Front-End developer with over 2 years of experience in Web and App Development, specializing in technologies suchas React JS, Next JS, React Native, JavaScript, HTML, and CSS. My expertise extends tocreation of responsive webinterfaces, data visualization design, issue analysis, and seamless API integration. I amhighly passionate and versatilefront-end developer with expertise in a wide range of modern web and mobiletechnologies and well-versedin constructing dynamic and responsive user interfaces utilizing React.js, React Native,Next.js. My proficiency extendsto the core web technologies, including HTML, CSS, and JavaScript, along with aunderstanding of API CRUDoperations and usability enhancement. I am proficient in the utilization of renownedframeworks like Bootstrap andTailwind CSS to elevate user experiences. Additionally, my skills extend to versionand collaborative developmentthrough Git and GitHub. I am deeply committed to keeping abreast of the latesttrends, and I am dedicated todelivering top-quality code and user-friendly applications. Throughout my journey, Icontributed to the successfulcompletion of eight projects, in addition to several internal initiatives.</p>
      </div>
    </>
  )
}

export default HomePage