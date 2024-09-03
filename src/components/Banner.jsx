import React from 'react'
import { Typewriter, handleType } from 'react-simple-typewriter'
import Container from './Container'
import Flex from './Flex'
import { CiSaveDown2 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import mahadi from '../assets/Mehedi.jpg'
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Banner = () => {
    const handleDone = () => {

    }
    return (
        <div id='Home' className="bg-slate-900  py-[100px]">
            <Container>
                <div className="lg:flex justify-between items-center">
                    <div className="lg:w-[50%]">
                        <div className=" ">
                            <h3 className=' font-prot font-bold text-slate-400 lg:text-[30px] text-[30px]'>Hi, I  am</h3>
                            <h2 className=' font-prot font-bold text-slate-400 lg:text-[42px] text-[30px]'>MAHADI AL MASUD.</h2>
                            <h1 className=' font-prot lg:text-[40px] text-[24px]' style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'bold' }}>
                                {''}
                                <span style={{ color: '#0ea5e9', fontWeight: 'bold', fontFamily: "Sedan", }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={["I'm a Devloper ", "I'm a Freelancer "]}
                                        loop={true}
                                        cursor
                                        cursorStyle='.'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    />
                                </span>
                            </h1>
                            <h4 className='font-prot font-bold text-[18px] text-slate-400'>I, m a designer & developer with a passion for web design.
                                I enjoy developing simple, clean and slick websites that provide real value to the end user.</h4>

                        </div>
                    </div>
                    <div className="lg:w-[40%]  ">

                        <div className=" border-[2px] border-sky-400 px-[20px] py-[20px] rounded-[20px] ">
                            <div className="w-[150px] h-[150px] rounded-[50%]  mx-auto ">
                                <img src={mahadi} className=' w-[150px] h-[150px] border-[4px] border-sky-400 shadow-2xl shadow-sky-500 
                            rounded-[50%]' alt="" />
                            </div>
                            <div className=" text-center py-[20px]">
                                <h1 className=' font-prot font-semibold text-[32px] text-slate-400'>Mahadi Al masud</h1>
                                <h2 className=' font-prot font-semibold text-[24px] text-slate-400'>Frontend React Developer</h2>

                            </div>
                            <div className=" flex justify-center gap-x-2 items-center font-prot font-medium text-[18px] text-slate-400">
                                <IoMailSharp />
                                <h6>mahadialmasud2@gmail.com</h6>
                            </div>
                            <div className=" flex justify-center gap-x-2 items-center font-prot font-medium text-[18px] text-slate-400">
                                <FaLocationDot />
                                <h6>Dhaka , Bangladesh</h6>
                            </div>
                            <div className=" text-center py-[20px]">
                                <h1 className='py-[5px] px-[8px] bg-sky-500 inline-block rounded-[5px] ml-[10px] font-prot font-medium text-[18px] text-black'>HTML</h1>
                                <h1 className='py-[5px] px-[8px] bg-sky-500 inline-block rounded-[5px] ml-[10px] font-prot font-medium text-[18px] text-black'>JS</h1>
                                <h1 className='py-[5px] px-[8px] bg-sky-500 inline-block rounded-[5px] ml-[10px] font-prot font-medium text-[18px] text-black'>CSS</h1>
                                <h1 className='py-[5px] px-[8px] bg-sky-500 inline-block rounded-[5px] ml-[10px] font-prot font-medium text-[18px] text-black'>REACT</h1>
                            </div>
                            <div className=" text-center ">
                                <a href="">
                                    <div className=" border-[1px]  border-slate-400 px-[15px] py-[10px] hover:bg-sky-500 cursor-pointer inline-block
                                     text-slate-400 hover:text-[#222] duration-300 rounded-[10px]">
                                        <div className="flex gap-[10px] items-center  font-prot font-medium text-[20px] ">

                                            <a className=''>Download CV</a>
                                            <CiSaveDown2 />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner
