import React, { useEffect } from 'react'

function Skills() {

  useEffect(() => {
   
    let number = document.getElementById('number');
    let counter =0
    setInterval(() => {
      if (counter == 65) {
        clearInterval;
      }else{
        counter += 1;
        number.innerHTML = `${counter}`
      }
    }, 30);
   
  }, [])
  

  return (
    <div className='center h-[100vh] text-2xl font-bold bg-white'>
      <div className='skill'>
        <div className='outer'>
          <div className='inner'>
            <div id="number">65%</div>
          </div>
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' className='absolute top-0 left-0' version='1.1' width='160px' height='160px'>
          <defs>
            <linearGradient id='gColor'>
              <stop offset={'0%'} stopColor={'#DA22FF'} />
              <stop offset={'100%'} stopColor={'#9733EE'} />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" strokeLinecap='round' />
        </svg>
      </div>
    </div>
  )
}

export default Skills;
