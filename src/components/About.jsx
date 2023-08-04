import React from 'react'
import { Element } from 'react-scroll'


const About = () => {
  return (
    <Element name = "about">
        <div className='w-screen h-screen  text-white bg-cover bg-center' >
          <div className='max-w-[1240px] mx-auto flex justify-center items-center h-[100%] px-5 py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div className='flex flex-col'>
                <div className='text-2xl md:text-5xl font-bold'>
                  About Me
                </div>
                <div className='text-sm md:text-lg lg:text-xl'>
                  <p className='mt-3'>I am <span className='font-bold'>Hamza</span>, a computer science student at the <span className='font-bold'>National Univeristy of Sciences And Technology (NUST)</span>. I take programming as a passion rather than a proffesion. I like to learn new development technologies as they roll out and keep myself updated on the software side.</p>
                  <p className='mt-10'>"Immersed in the world of programming, I perceive it as the ultimate art of our modern era, and with unwavering passion, I am steadfastly embarking on a transformative journey, aspiring to become the Picasso of this digital canvas."</p>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                
                  <img src='/img/hamza.jpg' className='w-[30%] md:w-[50%] rounded-3xl hover:scale-105 duration-300 shadow-2xl'/>
                
              </div>
            </div>
          </div>
        </div>
    </Element>
  )
}

export default About