import React from 'react'
import Container from './Container'
import project1 from '../assets/prjh2.png'
import projectt from '../assets/prjett.png'
import project3 from '../assets/pej4.png'
import { FaGithub } from "react-icons/fa6";
import orebi from '../assets/orebi.png'
import hekto from '../assets/hekto.png'
import Login from '../assets/login.png'

const Project = () => {
    return (
        <div className=' bg-slate-900  py-[20px]'>
            <Container>
                <div className=" text-center py-[40px]">
                    <h3 className=' font-prot font-bold text-[48px] text-slate-400 '>My Projects</h3>
                </div>
                <div className="lg:flex justify-between">

                    <div className="lg:w-[32%] lg:py-0 py-3" data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <a href="https://grand-taiyaki-cd06aa.netlify.app/">
                            <div className=" bg-slate-500 relative group overflow-hidden rounded-[20px] shadow-stone-600">
                                <div className=" w-100%] h-[200px]  items-center" >
                                    <img src={orebi} className=' w-full h-full' alt="" />
                                </div>
                                <div className=" text-center py-4   absolute bottom-[-200px] items-center group-hover:bottom-[0] group-hover-top-[10px] duration-300 bg-slate-500">
                                    <p className=' font-prot font-medium text-gray-400 text-[14px]'>This is a Ecommerce website and friendly user website for client to easily use and buy product..</p>
                                    <div className=" w-[30px] mx-auto p-[8px] rounded-[20px] bg-white mb-[10px] ">
                                      <a href="https://grand-taiyaki-cd06aa.netlify.app/"><FaGithub className=' text-center  '/></a>
                                    </div>
                                </div>
                           
                            </div>
                        </a>
                    </div>

                    <div className="lg:w-[32%] lg:py-0 py-3" data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <a href="https://hekto-projectmahadi.netlify.app/" >
                            <div className=" bg-slate-500 relative group overflow-hidden rounded-[20px] shadow-stone-600">
                                <div className=" w-[100%] h-[200px]">
                                    <img src={hekto} className=' w-full  h-full' alt="" />
                                </div>
                                <div className=" text-center  py-4  absolute bottom-[-200px] items-center group-hover:bottom-[0] group-hover-top-[10px] duration-300 bg-slate-500">
                                    <p className=' font-prot font-medium text-gray-400 text-[14px]'>This is a Ecommerce website and friendly user website for client to easily use and buy product..</p>
                                    <div className=" w-[30px] mx-auto p-[8px] rounded-[20px] bg-white mb-[10px] ">
                                      <a href="https://hekto-projectmahadi.netlify.app/"><FaGithub className=' text-center  '/></a>
                                    </div>
                                </div>
                             
                            </div>
                        </a>
                    </div>

                    <div className="lg:w-[32%] lg:py-0 py-3 " data-aos="fade-up" data-aos-anchor-placement="top-center" >
                        <a href="https://mahadireact71.netlify.app/" >
                            <div className="  bg-slate-500 relative group overflow-hidden rounded-[20px] shadow-stone-600">
                                <div className=" w-[100%] h-[200px] rounded-[20px]">
                                    <img src={project1} className=' w-full  h-full' alt="" />
                                </div>
                                <div className=" text-center  py-4  absolute bottom-[-200px] items-center group-hover:bottom-[0] group-hover-top-[10px] duration-300 bg-slate-500">
                                    <p className=' font-prot font-medium text-gray-400 text-[14px]'>This is a 10 pages website that can help a company to marketing by client and in
                                         here everything is visible to know and judgement people to take a reaction about the company.</p>
                                    <div className=" w-[30px] mx-auto p-[8px] rounded-[20px] bg-white mb-[10px] ">
                                      <a href="https://mahadireact71.netlify.app/"><FaGithub className=' text-center  '/></a>
                                    </div>
                                </div>
                                
                            </div>
                        </a>
                    </div>

                </div>
                <div className="lg:flex justify-between py-[30px]" >

                    <div className="lg:w-[32%] lg:py-0 py-3" data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <a href="https://bespoke-belekoy-f26052.netlify.app">
                            <div className=" bg-slate-500 relative group overflow-hidden rounded-[20px] shadow-stone-600">
                                <div className=" w-100%] h-[200px]  items-center" >
                                    <img src={project3} className=' w-full h-full' alt="" />
                                </div>
                                <div className=" text-center py-4   absolute bottom-[-200px] items-center group-hover:bottom-[0] group-hover-top-[10px] duration-300 bg-slate-500">
                                    <p className=' font-prot font-medium text-gray-400 text-[14px]'>It's a real state company's website. Client can easy to know about this company and if want then they can hire or take a reaction about this company.</p>
                                    <div className=" w-[30px] mx-auto p-[8px] rounded-[20px] bg-white mb-[10px] ">
                                      <a href="https://bespoke-belekoy-f26052.netlify.app"><FaGithub className=' text-center  '/></a>
                                    </div>
                                </div>
                           
                            </div>
                        </a>
                    </div>

                    <div className="lg:w-[32%] lg:py-0 py-3" data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <a href="https://react-figma71.netlify.app/" >
                            <div className=" bg-slate-500 relative group overflow-hidden rounded-[20px] shadow-stone-600">
                                <div className=" w-[100%] h-[200px]">
                                    <img src={projectt} className=' w-full  h-full' alt="" />
                                </div>
                                <div className=" text-center  py-4  absolute bottom-[-200px] items-center group-hover:bottom-[0] group-hover-top-[10px] duration-300 bg-slate-500">
                                    <p className=' font-prot font-medium text-gray-400 text-[14px]'>It's a real state company's website. Client can easy to know about this company 
                                        and if want then they can hire or take a reaction about this company.</p>
                                    <div className=" w-[30px] mx-auto p-[8px] rounded-[20px] bg-white mb-[10px] ">
                                      <a href="https://react-figma71.netlify.app/"><FaGithub className=' text-center  '/></a>
                                    </div>
                                </div>
                             
                            </div>
                        </a>
                    </div>

                    <div className="lg:w-[32%] lg:py-0 py-3 " data-aos="fade-up" data-aos-anchor-placement="top-center" >
                        <a href="https://todo-main-iota.vercel.app/" >
                            <div className="  bg-slate-500 relative group overflow-hidden rounded-[20px] shadow-stone-600">
                                <div className=" w-[100%] h-[200px] rounded-[20px]">
                                    <img src={Login} className=' w-full  h-full' alt="" />
                                </div>
                                <div className=" text-center  py-4  absolute bottom-[-200px] items-center group-hover:bottom-[0] group-hover-top-[10px] duration-300 bg-slate-500">
                                    <p className=' font-prot font-medium text-gray-400 text-[14px]'>This is a 10 pages website that can help a company to marketing by client and in
                                         here everything is visible to know and judgement people to take a reaction about the company.</p>
                                    <div className=" w-[30px] mx-auto p-[8px] rounded-[20px] bg-white mb-[10px] ">
                                      <a href="https://todo-main-iota.vercel.app/"><FaGithub className=' text-center  '/></a>
                                    </div>
                                </div>
                                
                            </div>
                        </a>
                    </div>

                </div>


                <div className=" text-center py-3">
                <div className=" py-[10px] px-[15px] bg-slate-400 hover:text-[#222] hover:bg-sky-500  duration-300 inline-block rounded-[10px]">
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
