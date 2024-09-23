import React from 'react'
import Container from './Container'
import aboutImg from '../assets/aboutImgone.png'

const About = () => {
  return (
    <>
    <div id='About' className="bg-[url('../src/assets/aboutbgs.png')] bg-cover bg-no-repeat bg-center">
    <div className='py-[60px] '>
      <Container>
        <div className=" text-center">
          <h3 className=' font-prot font-bold text-[48px] text-sky-400 bg-slate-700 border-b-[4px] border-sky-400 inline-block'>About Me</h3>
        </div>
       <div className=" lg:flex justify-between items-center py-[20px]">
       <div className="bg-slate-700 lg:w-[50%] text-center  p-[50px] hover:shadow-2xl hover:shadow-slate-700 duration-300 rounded-[15px]">
          <div className=" items-center text-center">

            <h4 className='font-prot font-bold text-[18px] text-slate-400'>I, m a designer & developer with a passion for web design. I enjoy developing simple,
              clean and slick websites that provide real value to the end user.
              I love to learn new things and experiment with new technologies. These are some
              of the major <span className='text-sky-400'>HTML </span>,<span className='text-sky-400'>CSS</span> ,<span className='text-sky-400'>JS </span>, <span className='text-sky-400'>REACT</span>  and etc  tools and platforms I have worked with .</h4>
          </div>
        </div>
        <div className=" lg:w-[40%]">
          <div className=" lg:w-[300px] lg:h-[400px] ">
            <img src={aboutImg} className=' w-full h-full rounded-[20px]'  alt="" />
          </div>
        </div>
       </div>
      </Container>
    </div>
    </div>
 
    </>
  )
}

export default About
