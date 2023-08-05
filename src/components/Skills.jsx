import React, { useEffect } from 'react'
import skills from '../constants/skills'
import { Element } from 'react-scroll'
import BallCanvas from '../components/Ball'

const Skills = () => {
  

  return (
    <Element name = "skills">
        <div className='w-screen  text-white bg-center bg-cover'>
            <div className='max-w-[1240px] mx-auto px-10 py-20 '>
              <div className='text-2xl md:text-5xl font-bold mb-10'>Skills</div>
              <div className='flex flex-wrap gap-9 justify-center items-center'>
              {
                skills.map((skill)=>(
                  <div className='w-24 h-24 md:w-28 md:h-28' key={skill.name}>
                    <BallCanvas icon = {skill.icon}/>
                  </div>
                ))
              }
              </div>              
            </div>
        </div>
    </Element>
  )
}

export default Skills



{/* <div className='text-2xl md:text-5xl font-bold mb-10'>Skills And Technologies</div>
                <div className='flex flex-wrap justify-center items-center gap-6'>
                  {skills.map((skill,index)=>(
                    <div key={index} className='border-2 w-[200px] h-[200px] border-white bg-gray-800 text-white flex flex-col justify-center items-center p-2 rounded-xl select-none hover:scale-110 hover:bg-white hover:text-black duration-300'>
                      <img className='w-[50%] mb-2' src={`${skill.icon}`}/>
                      <div className='font-bold text-[0.7rem] md:text-xl'>{skill.name}</div>
                    </div>
                  ))}
                </div> */}