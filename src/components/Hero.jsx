import React from 'react'
import { Element } from 'react-scroll'

const Hero = () => {



  return (
    <Element name="home">
      <div className='h-screen w-screen bg-cover bg-center text-white' >
        <div className='opacity-100 max-w-[1240px] flex flex-col  px-4 mx-auto w-[100%] h-[100%] ' >
          <div className='flex px-4 pt-4 flex-row-reverse justify-between'>
            <a target='_blank' href='https://drive.google.com/drive/folders/10OK5ke_k-Nq7udz5Ejvcd9M1G6nloKPA?usp=sharing' className='justify-self-center py-1 px-2 mt-2 md:px-5 md:py-2 border-2 border-white from-black to-purple-800 bg-gradient-to-l text-sm sm:text-lg md:text-xl '>Download CV</a>
            <div className='flex justify-center items-center gap-2 md:gap-4 mt-4'>
              <a href='https://wa.me/03090215742' target='_blank'><img className='cursor-pointer w-6 md:w-8' src='/img/whatsapp.png' /></a>
              <a href='mailto:maamir.bscs21seecs@seecs.edu.pk' target='_blank'><img className=' cursor-pointer w-6 md:w-8' src='/img/mail.png' /></a>
              <a href='https://www.linkedin.com/in/muhammad-hamza-aamir-201874269' target='_blank'><img className=' cursor-pointer w-5 md:w-7' src='/img/linkedin.png' /></a>
            </div>
          </div>
          <div className='text-center my-auto translate-y-[-10%]'>
            <p className='text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold py-2'>My name is HAMZA AAMIR</p>
            <p className='text-sm sm:text-lg md:text-xl lg:text-2xl py-2 '>I am A Programming enthusiast.<br />I like to make Web Apps and study about Artificial Intelligence</p>
          </div>
          
        </div>
      </div>
    </Element>
  )
}

export default Hero