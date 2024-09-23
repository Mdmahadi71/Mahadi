import React from 'react'
import Container from './Container'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import ScrollToTop from "react-scroll-to-top";
import BackTotop from './BackTotop';

const Connect = () => {
  return (
    <div id='Connect' className=' bg-slate-900  py-[100px]'>
  
      <Container>
        <div className="lg:flex justify-between">
          <div className="lg:w-[50%]">
            <h2 className=' font-prot font-bold text-[36px] text-slate-400'>Lets Connect</h2>
            <h3 className=' font-prot font-bold text-[20px] text-slate-400 py-[30px]'>Please fill out the form on this section to contact with me </h3>
            <div className="flex gap-[20px] font-prot font-bold text-[26px] text-slate-400 py-[30px]">
              <a href="https://www.facebook.com/habibal.masud?mibextid=ZbWKwL" target='blank'><FaFacebookSquare /></a>
              <a href="https://www.instagram.com/habibalmasud79/" target='blank'><FaInstagramSquare /></a>
              <a href="https://www.linkedin.com/in/mahadi-al-masud-30a927309/" target='blank'><FaLinkedin /></a>
              <a href="https://github.com/Mdmahadi71" target='blank'><FaGithub /></a>
            </div>
          </div>
          <div className="lg:w-[50%] ">
            <h3 className=' font-prot font-bold text-[36px] text-slate-400'>Let’s Message me</h3>
            <div className="">
              <div className="">
                <div className="">
                  <form action="">
                    <input type="text" className='w-full py-5 mt-2 bg-slate-600 font-prot text-[15px] font-medium  rounded-[10px] text-white outline-none ' placeholder='Name*' />
                    <input type="text" className='w-full py-5 mt-2 bg-slate-600 text-cyan-50 font-prot text-[15px] font-medium rounded-[10px] outline-none' placeholder='Email*' />
                    <input type="text" className='w-full py-5 mt-2 bg-slate-600 text-cyan-50 font-prot text-[15px] font-medium rounded-[10px] outline-none' placeholder='Your Subject*' />
                    <input type="text" className='w-full py-[40px] mt-2 bg-slate-600 text-white font-prot text-[15px] font-medium rounded-[10px] outline-none' placeholder='Your Message*' />
                    <input type="submit" className='w-full py-5 mt-2 bg-slate-600 text-cyan-50 font-prot text-[15px] font-medium rounded-[10px] hover:bg-sky-400 duration-300' value="Send Massage" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <BackTotop/>
    </div>
  )
}

export default Connect
