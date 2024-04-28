import React from 'react'
import Container from './Container'
import project1 from '../assets/prjh2.png'
import projectt from '../assets/prjett.png'
import project3 from '../assets/pej4.png'
import { FaGithub } from "react-icons/fa6";

const Project = () => {
    return (
        <div className=' bg-slate-900  py-[20px]'>
            <Container>
                <div className=" text-center py-[40px]">
                    <h3 className=' font-prot font-bold text-[48px] text-slate-400 '>My Projects</h3>
                </div>
                <div className="lg:flex justify-between">
                    <div className="lg:w-[33%] lg:py-0 py-3" data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <a href="https://bespoke-belekoy-f26052.netlify.app">
                            <div className=" border py-3 px-5 bg-slate-500">
                                <div className=" w-100%] items-center" >
                                    <img src={project3} className=' w-full' alt="" />
                                </div>
                                <div className=" text-center mt-8">
                                    <a className='border px-5 py-3 bg-slate-700 text-slate-400  font-prot font-semibold text-[20px] hover:bg-sky-400 hover:text-[#222] duration-200' href="https://bespoke-belekoy-f26052.netlify.app">
                                        Github
                                    </a>
                                </div>
                                <div className="lg:flex gap-2 mt-6">
                                    <div className="flex gap-2">
                                        <h3 className='border px-2 py-3 bg-slate-700 text-slate-400 font-prot font-semibold text-[20px]'>HTML</h3>
                                        <h3 className='border px-2 py-3 bg-slate-700 text-slate-400 font-prot font-semibold text-[20px]'>Teilwindcss</h3>
                                        <h3 className='border px-2 py-3 bg-slate-700 text-slate-400 font-prot font-semibold text-[20px]'>Javascript</h3>
                                    </div>
                                    <div className="flex gap-2 lg:py-0 py-2 justify-center">
                                        <h3 className='border lg:px-2 px-4 lg:py-3 py-3 bg-slate-700 text-slate-400 font-prot font-semibold text-[20px] lg:text-start text-center'>React</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="lg:w-[33%] lg:py-0 py-3" data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <a href="react-figma71.netlify.app" >
                            <div className=" border py-3 px-3 bg-slate-500">
                                <div className=" w-[100%]">
                                    <img src={projectt} className=' w-full' alt="" />
                                </div>
                                <div className=" text-center mt-3">
                                    <a className='border px-5 py-3 bg-slate-700 text-slate-400 font-fontss font-semibold text-[20px] hover:bg-sky-400 hover:text-[#222] duration-200' href="react-figma71.netlify.app">
                                        Github
                                    </a>
                                </div>
                                <div className="lg:flex gap-2 mt-6">
                                    <div className="flex gap-2 justify-center">
                                        <h3 className='border lg:px-2 px-3 lg:py-3 py-3 bg-slate-700 text-slate-400 font-prot font-semibold text-[20px]'>HTML</h3>
                                        <h3 className='border lg:px-2 px-3 lg:py-3 py-3 bg-slate-700 text-slate-400 font-prot font-semibold text-[20px]'>Css</h3>
                                        <h3 className='border lg:px-1 px-3 lg:py-3 py-3 bg-slate-700 text-slate-400 font-prot font-semibold text-[20px]'>Boosturb</h3>
                                    </div>
                                    <div className="flex gap-2 justify-center py-[20px] lg:py-0">
                                        <h3 className='border lg:px-1 px-3 lg:py-3 py-3 bg-slate-700 text-slate-400 font-prot font-semibold text-[20px]'>Javascript</h3>
                                        <h3 className='border lg:px-2 px-3 lg:py-3 py-3 bg-slate-700 text-slate-400 font-prot font-semibold text-[20px]'>React</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="lg:w-[33%] lg:py-0 py-3" data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <a href="mahadireact71.netlify.app" >
                            <div className=" border py-2 px-3 bg-slate-500">
                                <div className=" w-[100%]">
                                    <img src={project1} className=' w-full' alt="" />
                                </div>
                                <div className=" text-center mt-4">
                                    <a className='border px-5 py-3 bg-slate-700 text-slate-400 font-fontss font-semibold text-[20px] hover:bg-sky-400 hover:text-[#222]  duration-300' href="mahadireact71.netlify.app">
                                        Github
                                    </a>
                                </div>
                                <div className="lg:flex gap-1 mt-6">
                                    <div className="flex gap-2 justify-center">
                                        <h3 className='border lg:px-2 px-3 lg:py-3 py-3 bg-slate-700  text-slate-400 font-prot font-semibold text-[20px]'>HTML</h3>
                                        <h3 className='border lg:px-2 px-3 lg:py-3 py-3 bg-slate-700  text-slate-400 font-prot font-semibold text-[20px]'>Css</h3>
                                        <h3 className='border lg:px-1 px-3 lg:py-3 py-3 bg-slate-700  text-slate-400 font-prot font-semibold text-[20px]'>Boosturb</h3>
                                    </div>
                                    <div className="flex gap-2 justify-center lg:py-0 py-5 ">
                                        <h3 className='border lg:px-1 px-3 lg:py-3 py-3 bg-slate-700  text-slate-400 font-prot font-semibold text-[20px]'>Javascript</h3>
                                        <h3 className='border lg:px-2 px-3 lg:py-3 py-3 bg-slate-700  text-slate-400 font-prot font-semibold text-[20px]'>React</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className=" text-center py-3">
                <div className="border-2 border-slate-400 py-[10px] px-[15px] text-slate-400 hover:text-[#222] hover:bg-sky-500  duration-300 inline-block">
                        <div className="flex gap-x-2 items-center ">
                            <FaGithub />
                            <a className=' font-prot font-medium text-[20px]  ' href="https://github.com/Mdmahadi71" target='blank'>Github</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Project
