
import RoundSkillBar from '../components/RoundSkillBar';
// style={{position: 'absolute', top: '0', left: '0' }}
function Skills() {
  return (
    <>
      <div className='space-y-20 pt-[150px] mb-24 md:pt-16 w-full'>
        <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl py-2 text-center'> My Skills </h1>
        <div className='center text-2xl font-bold flex flex-wrap' >
          <RoundSkillBar value={75} text="Html" />
          <RoundSkillBar value={75} text="Css" />
          <RoundSkillBar value={60} text="JavaScript" />
          <RoundSkillBar value={60} text="jQuery" />
          <RoundSkillBar value={75} text="Fetch API" />

          <RoundSkillBar value={70} text="React Js" />
          <RoundSkillBar value={70} text="Next Js" />
          <RoundSkillBar value={70} text="React-Native" />
          <RoundSkillBar value={50} text="Node Js" />
          <RoundSkillBar value={75} text="Axios" />

          <RoundSkillBar value={75} text="Bootstrap" />
          <RoundSkillBar value={75} text="Tailwind" />
          <RoundSkillBar value={60} text="Mongoose" />
          <RoundSkillBar value={50} text="Express Js" />
          <RoundSkillBar value={50} text="Rest Api" />

          <RoundSkillBar value={50} text="Redux" />
          <RoundSkillBar value={50} text="React Redux" />
          <RoundSkillBar value={50} text="Redux Toolkit" />
          <RoundSkillBar value={50} text="MongoDB" />
          <RoundSkillBar value={50} text="SQL" />

          <RoundSkillBar value={75} text="Git" />
          <RoundSkillBar value={75} text="Git-Hub" />
          <RoundSkillBar value={75} text="Windows" />
          <RoundSkillBar value={75} text="Vs Code" />
        </div>
      </div>
    </>
  )
}

export default Skills;
