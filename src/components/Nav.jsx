import React from 'react'
import { Link } from 'react-scroll'


const Nav = () => {
  

  return (
    <>
    <div className='fixed bottom-14 left-[50%] text-[0.6rem] translate-x-[-50%] sm:text-sm md:text-base lg:text-lg text-white flex bg-purple-950 opacity-80 px-2 rounded-full overflow-hidden z-50'>
        <Link to = "home" smooth = {true} duration={500} className='link py-4 px-3 scroll-smooth hover:bg-white rounded-full hover:text-black duration-200 select-none cursor-pointer'>Home</Link>
        <Link to = "about" smooth = {true} duration={500} className='link py-4 px-3 scroll-smooth hover:bg-white rounded-full hover:text-black duration-200 select-none cursor-pointer'>About</Link>
        <Link to = "skills" smooth = {true} duration={500} className='link py-4 px-3 scroll-smooth hover:bg-white rounded-full hover:text-black duration-200 select-none cursor-pointer'>Skills</Link>
        <Link to = "education" smooth = {true} duration={500} className='link py-4 px-3 scroll-smooth hover:bg-white rounded-full hover:text-black duration-200 select-none cursor-pointer'>Education</Link>
        <Link to = "projects" smooth = {true} duration={500} className='link py-4 px-3 scroll-smooth hover:bg-white rounded-full hover:text-black duration-200 select-none cursor-pointer'>Projects</Link>
    </div>
  </>
  )
}

export default Nav