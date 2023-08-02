// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { motion,useAnimation } from 'framer-motion'
// const Opening = () => {
//   const navigate = useNavigate()
//   const controlLeft = useAnimation()
//   const controlRight = useAnimation()

//   const handleClick = async () =>{
//     controlLeft.start({
//       x:"-53vw"
//     })

//     await controlRight.start({
//       x:"53vw"
//     })

//     navigate('/main')
    
//   }


//   return (
//     <div onClick={handleClick} className='text-white text-[2rem] sm:text-[4rem] md:text-[7rem] lg:text-[11rem]  h-screen w-screen bg-cover bg-center cursor-pointer' style={{backgroundImage:"url('./img/bgpurple.jpg')"}}>
//         <motion.div id = "left" className='absolute top-0 left-0 w-[50%] h-screen bg-black overflow-hidden'
//           animate = {controlLeft}
//           transition={{
//             type:"spring",
//             stiffness:25
//           }}
//         >
//           <div className='absolute top-[50%] right-0 translate-x-[50%] translate-y-[-50%] text-purple-300 font-bold select-none'>WELCOME</div>
//         </motion.div>
//         <motion.div id = "right" className='absolute top-0 right-0 w-[50%] h-screen bg-black overflow-hidden'
//           animate = {controlRight}
//           transition={{
//             type:"spring",
//             stiffness:25
//           }}
//         >
//           <div className='absolute top-[50%] left-0 translate-x-[-50%] translate-y-[-50%] text-purple-300 font-bold select-none'>WELCOME</div>
//         </motion.div>
//     </div>
//   )
// }

// export default Opening