import React from 'react'
import { Element } from 'react-scroll'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import educations from '../constants/educations'

const EducationCard = ({education}) =>{
  return(
  <VerticalTimelineElement
    contentStyle={{background:'#1d1836',color: '#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={education.years}
    // iconStyle={{background:""}}
    icon = {
      <div className='h-full w-full flex justify-center items-center '>
        <img src={education.icon}
          alt=''
          className='rounded-full object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-xl font-bold border-white border-b-2 pb-2'>{education.school}</h3>
      <h3 className='text-white text-lg font-semibold mt-1'>{education.title}</h3>
      <p className='text-white text-lg font-semibold'>{education.detail}</p>
    </div>

  </VerticalTimelineElement>
  )
}




const Education = () => {

  return (
    <Element name = "education">
      <div className='min-h-screen w-screen from-black to-purple-950 bg-gradient-to-b bg-center bg-cover' style={{backgroundImage:"url('./img/bgpurple.jpg')"}}>
        <div className='mx-auto max-w-[1240px] w-[100%] h-[100%] py-20 px-10 flex items-start edu:items-center flex-col'>
            <div className='text-white font-bold text-xl edu:text-5xl text-center md:text-3xl border-b-4 py-4 border-white'>My Educational Journery</div>
            <VerticalTimeline>
              {
                educations.map((education,index)=>(
                  <EducationCard key = {index} education = {education}/>
                ))
              }
            </VerticalTimeline>
          
        </div>
      </div>
    </Element>
    
  )
}

export default Education




