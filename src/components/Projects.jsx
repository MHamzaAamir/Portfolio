import React from 'react'
import { Element } from 'react-scroll'
import projects from '../constants/projects'

const Projects = () => {
  
  return (
    <Element name="projects">
      <div className='w-screen bg-center bg-cover' >
        <div className='mx-auto max-w-[1240px] px-10 py-8 md:pt-14 pb-44 text-white'>
          <div className='text-2xl md:text-5xl font-bold mb-10'>My Projects</div>
          <div className='flex flex-wrap justify-center gap-6 '>
            {projects.map((project, index) => (
              <div key={index} className='border-2 h-[340px] w-[210px] border-white bg-gray-800 text-white flex flex-col gap-2 justify-center items-center py-2 px-3 rounded-xl select-none hover:scale-110 hover:bg-white hover:text-black duration-300'>
                <div className='font-bold text-center'>{project.name}</div>
                <img className='w-[50%] mb-2' src={`${project.icon}`} />
                <div className='h-[120px] text-center'>{project.details}</div>
                <div>
                  <a href={`${project.link}`} target='_blank' className={`${project.private ? 'disabled-link' : ''}` + "  px-2 py-1 bg-purple-900 text-white"}>Code</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Projects