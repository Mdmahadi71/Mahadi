import React from 'react'
import Container from './Container'
import { CiSaveDown2 } from "react-icons/ci";

const What = () => {
    return (
        <div className='bg-slate-900 py-[50px]'>
            <Container>
                <div className="font-prot font-bold text-[36px] text-center">
                    <h2 className='font-prot font-bold text-[36px] text-slate-400 '>What I do</h2>
                    <h3 className=' font-prot font-bold text-[20px] text-slate-400  '>I have more than 2 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use.
                        Want to find out more about my experience? Check out my online resume and project .</h3>
                </div>
                <div className="py-[30px]">
                    <h2 className='font-prot font-bold text-[36px] text-center text-slate-400 '>A summary of My Resume</h2>
                    <div className="lg:flex justify-center lg:text-start text-center lg:gap-x-[100px]">
                        <div className="lg:py-[30px] py-[25px] ">
                            <h3 className=' font-prot font-bold text-[32px] text-slate-400 '>My Education</h3>
                            <div className="py-[30px]">
                                <h2 className=' font-prot font-bold text-[24px] text-slate-400 '>Diploma in Engineering</h2>
                                <h3 className=' font-prot font-bold text-[22px] text-slate-400 '>Dinajpur Polytechnic Institute</h3>
                                <h3 className=' font-prot font-bold text-[20px] text-slate-400 '>2019 - 2023</h3>
                            </div>
                            <div className="lg:py-[34px]">
                                <h2 className=' font-prot font-bold text-[24px] text-slate-400 '>Secondary School Certificate</h2>
                                <h3 className=' font-prot font-bold text-[22px] text-slate-400 '>Khalashpir High School</h3>
                                <h3 className=' font-prot font-bold text-[20px] text-slate-400 '>2014 - 2019</h3>
                            </div>
                        </div>
                        <div className="py-[30px]">
                            <h2 className=' font-prot font-bold text-[32px] text-slate-400 '>My Experience</h2>
                            <div className="py-[20px] border-b-5 border-slate-400 ">
                                <h2 className=' font-prot font-bold text-[24px] text-slate-400 '>Frontend Devlopment With React</h2>
                                <h3 className=' font-prot font-bold text-[22px] text-slate-400 '>Creative iT institute</h3>
                                <h3 className=' font-prot font-bold text-[20px] text-slate-400 '>2023 - 2024</h3>
                                <h3 className=' font-prot font-bold text-[20px] text-slate-400 '>Internship</h3>
                            </div>
                            <div className="py-[20px]">
                                <h2 className=' font-prot font-bold text-[24px] text-slate-400 '>Frontend Devlopment With React</h2>
                                <h3 className=' font-prot font-bold text-[22px] text-slate-400 '>Creative iT institute</h3>
                                <h3 className=' font-prot font-bold text-[20px] text-slate-400 '>2023 - 2024</h3>
                                <h3 className=' font-prot font-bold text-[20px] text-slate-400 '>Internship</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" lg:pl-[45%] pl-[90px] translate-[-50%] ">
                    <div className="border-2 border-slate-400 py-[10px] px-[15px] text-slate-400 hover:text-[#222] hover:bg-sky-500  duration-300 inline-block">
                        <div className="flex gap-x-2 items-center ">
                            <CiSaveDown2 />
                            <a className=' font-prot font-medium text-[20px]  ' href=""> Download CV</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default What
