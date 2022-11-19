
import RoundSkillBar from '../components/RoundSkillBar';
// style={{position: 'absolute', top: '0', left: '0' }}
function Skills() {
  return (
    <>
      <div className='space-y-20 pt-[150px] mb-24 md:pt-16 '>
        <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl py-2 text-center'> My Skills </h1>
        <div className='center text-2xl font-bold space-y-20 lg:space-y-0 lg:space-x-20 flex-col lg:flex-row' >
          <div className=''>
            <p className='text-white'>Html</p>
            <RoundSkillBar value={75} />
          </div>
          <div>
            <p className='text-white'>CSS</p>
            <RoundSkillBar value={75} />
          </div>
          <div>
            <p className='text-white'>Bootstrap</p>
            <RoundSkillBar value={75} />
          </div>
          <div>
            <p className='text-white'>Tailwind</p>
            <RoundSkillBar value={75} />
          </div>
        </div>

        <div className='center text-2xl font-bold space-y-20 lg:space-y-0 lg:space-x-20 flex-col lg:flex-row '>
          <div>
            <p className='text-white'>JavaScript</p>
            <RoundSkillBar value={60} />
          </div>
          <div>
            <p className='text-white'>Next Js</p>
            <RoundSkillBar value={65} />
          </div>
          <div>
            <p className='text-white'>Rest Api</p>
            <RoundSkillBar value={50} />
          </div>
          <div>
            <p className='text-white'>Git</p>
            <RoundSkillBar value={45} />
          </div>
        </div>

        <div className='center text-2xl font-bold space-y-20 lg:space-y-0 lg:space-x-20 flex-col lg:flex-row '>
          <div>
            <p className='text-white'>MongoDB</p>
            <RoundSkillBar value={50} />
          </div>
          <div>
            <p className='text-white'>Express Js</p>
            <RoundSkillBar value={50} />
          </div>
          <div>
            <p className='text-white'>React Js</p>
            <RoundSkillBar value={60} />
          </div>
          <div>
            <p className='text-white'>Node Js</p>
            <RoundSkillBar value={50} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;
