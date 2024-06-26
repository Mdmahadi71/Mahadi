import React from 'react'
import { Typewriter, handleType } from 'react-simple-typewriter'
import Container from './Container'
import Flex from './Flex'
import { CiSaveDown2 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import mahadi from '../assets/mahadi3.png'

const Banner = () => {
    const handleDone = () => {

    }
    return (
        <div className=" bg-slate-900  py-[100px]">
            <Container>
                <div className="lg:flex justify-between">
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
                            <h4 className='font-prot font-bold text-[18px] text-slate-400'>I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user.</h4>
                            <div className="lg:flex gap-4 py-[20px]">
                                <div className="">
                                    <div className=" border-2  border-slate-400 px-[15px] py-[10px] hover:bg-sky-500  duration-300 inline-block ">
                                        <div className="flex gap-[10px] items-center  font-prot font-medium text-[20px] text-slate-400 hover:text-[#222] duration-300">
                                            <CiSaveDown2 className='' />
                                            <a className='' href="#">Download CV</a>
                                        </div>
                                    </div>
                                </div>
                                <div className=" lg:py-0 py-[30px]">
                                    <div className=" border-2  border-slate-400 p-[10px] hover:bg-sky-500  duration-300 inline-block ">
                                        <div className="flex gap-[10px] items-center font-prot font-medium text-[20px] text-slate-400 hover:text-[#222] duration-300">
                                            < FaPhoneAlt className=' ' />
                                            <a className='' href="#">Contact</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%]">
                        <div className=" lg:pl-[300px]">
                            <img src={mahadi} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner
