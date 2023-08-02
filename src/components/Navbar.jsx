import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <div className='absolute top-0 w-screen py-8'>
        <div className='max-w-[1240px] mx-auto px-6 flex justify-end items-center text-white'>
            <div>
                <motion.button 
                whileHover={{
                  scale:1.1
                }}
                whileTap={{
                  scale:0.8
                }}
                className='border border-white py-2 px-3 bg-gradient-to-l from-mygradient'>CONTACT ME</motion.button>
            </div>
        </div>
    </div>
  )
}

export default Navbar