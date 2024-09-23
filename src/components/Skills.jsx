import React from 'react'
import Container from './Container'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";


const Skills = () => {



  return (
    <div id='Skills' className='bg-slate-900 lg:py-[80px]'>
      <Container>
        <div className="">
          <div className=" text-center ">
            <h3 className=' font-prot font-bold text-[36px] text-slate-400'>Skills</h3>
            <h3 className=' font-prot font-semibold text-[20px] text-slate-400 py-2'>I love to learn new things and experiment with new technologies.
              These are some of the major languages, technologies, tools and platforms I have worked with:</h3>
          </div>
        </div>
        <div className=" w-full lg:flex justify-between py-[40px]">

          <div className=" lg:w-[40%] flex justify-between">
          <div className="lg:w-[24%]">
            <div className=" flex justify-center items-center h-[100px] w-[100px] bg-[#E54F26] rounded-full hover:shadow-[0_3px_10px_rgb(229,79,38)] duration-300  ">
              <FaHtml5 className=' text-white text-[35px]' />
            </div>
            <h2 className=' font-prot font-semibold  text-[35px] text-[#E54F26]'>HTML</h2>
          </div>
          <div className="lg:w-[24%]">
            <div className=" flex justify-center items-center h-[100px] w-[100px] bg-[#264de4] rounded-full hover:shadow-[#264fe4f3] duration-300  ">
              <FaCss3Alt className=' text-white text-[35px]' />
            </div>
            <h2 className=' font-prot font-semibold  text-[35px] text-[#264de4] pl-[15px]'>CSS</h2>
          </div>
          </div>

          <div className="  lg:w-[40%] flex justify-between">

          <div className=" lg:w-[24%]">

            <div className=" flex justify-center items-center h-[100px] w-[100px] bg-[#f0db4f] rounded-full hover:shadow-[#f0db4f] duration-300  ">
              <FaJsSquare className=' text-white text-[35px]' />
            </div>
            <h2 className=' font-prot font-semibold  text-[35px] text-[#f0db4f] pl-[30px]'>JS</h2>
          </div>
   

          <div className=" lg:w-[24%]">
            <div className=" flex justify-center items-center h-[100px] w-[100px] bg-[#61dbfb] rounded-full hover:shadow-[#61dbfb] duration-300  ">
              <FaReact className=' text-white text-[35px]' />
            </div>
            <h2 className=' font-prot font-semibold  text-[35px] text-[#61dbfb]'>REACT</h2>
          </div>
          </div>


        </div>

      </Container>
    </div>
  )
}

export default Skills
