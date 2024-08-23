import React from 'react'
import Container from './Container'

const About = () => {
  return (
    <div className='bg-slate-900  py-[100px]'>
      <Container>
        <div className="bg-slate-700 lg:w-[700px] mx-auto text-center py-[50px] hover:shadow-2xl hover:shadow-slate-700 duration-300 rounded-[15px]">
          <div className=" items-center text-center">
            <h3 className=' font-prot font-bold text-[48px] text-slate-400 '>About Me</h3>
            <h4 className='font-prot font-bold text-[18px] text-slate-400'>I, m a designer & developer with a passion for web design.
              I enjoy developing simple, clean and slick websites that provide real value to the end user.</h4>
          </div>
          <div className="lg:flex justify-between  py-[50px] ">
            <div className="lg:w-[30%] ">
              <h3 className='font-prot font-bold text-[18px] text-slate-400'>Name:</h3>
              <h3 className='font-prot font-bold text-[20px] text-slate-400'>Mahadi al masud</h3>
            </div>
            <div className=" lg:w-[30%]">
              <h2 className='font-prot font-bold text-[18px] text-slate-400'>Email:</h2>
              <h3 className='font-prot font-bold text-[20px] text-slate-400'>mahadialmasud2@gmail.com</h3>
            </div>
            <div className="lg:w-[30%]">
              <h2 className='font-prot font-bold text-[18px] text-slate-400'>From:</h2>
              <h3 className='font-prot font-bold text-[20px] text-slate-400'>Dhaka,Bangladesh</h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
