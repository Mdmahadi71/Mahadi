import React from 'react'
import Container from './Container'
import { IoCodeSlashSharp,IoCodeSharp } from "react-icons/io5";
import { RiBracesLine } from "react-icons/ri";


const What = () => {
    return (
        <div className=' bg-slate-900  py-[50px]'>
            <Container>
                <div className="font-prot font-bold text-[36px] w-[70%] mx-auto text-center my-[30px]">
                    <h2 className='font-prot font-bold text-[36px] text-slate-400 '>My <span className=' text-cyan-400'>Services</span></h2> 
                </div>
                <div className=" lg:flex justify-between">
                    <div className=" lg:w-[32%] lg:my-0 my-[25px]">
                        <div className=" text-center items-center mx-auto border-[2px] border-cyan-400 py-[20px] px-[20px] hover:shadow-2xl hover:shadow-cyan-400 rounded-[15px]">
                            <div className=" w-[20px]  mx-auto">
                                <IoCodeSlashSharp className='text-cyan-400 text-[30px]'/>
                            </div>
                            <h2 className=' font-prot font-bold text-[30px] text-slate-400  py-[10px]'>Web Development</h2>
                            <p className=' font-prot font-medium text-[20px] text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Natus, blanditiis dolor pariatur adipisci nemo totam,
                                 tempora ipsam excepturi harum ullam debitis quae eius quidem quam, nam fuga necessitatibus enim nulla.</p>
                            <div className=" px-[15px] py-[8px] rounded-[5px] inline-block cursor-pointer bg-cyan-400 text-black hover:bg-white  duration-200 my-[20px]">
                                <a className=' font-prot font-medium text-[20px] '>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className=" lg:w-[32%] lg:my-0 my-[25px]">
                        <div className=" text-center items-center mx-auto  border-[2px] border-cyan-400 py-[20px] px-[20px] hover:shadow-2xl hover:shadow-cyan-400 rounded-[15px]">
                            <div className=" w-[20px]  mx-auto">
                                <RiBracesLine className='text-cyan-400 text-[30px]'/>
                            </div>
                            <h2 className=' font-prot font-bold text-[30px] text-slate-400 py-[10px]'>Web Design</h2>
                            <p className=' font-prot font-medium text-[20px] text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Natus, blanditiis dolor pariatur adipisci nemo totam,
                                 tempora ipsam excepturi harum ullam debitis quae eius quidem quam, nam fuga necessitatibus enim nulla.</p>
                            <div className=" px-[15px] py-[8px] rounded-[5px] inline-block cursor-pointer bg-cyan-400 text-black hover:bg-white  duration-300 my-[20px]">
                                <a className=' font-prot font-medium text-[20px] '>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className=" lg:w-[32%] lg:my-0 my-[25px]">
                        <div className=" text-center items-center mx-auto  border-[2px] border-cyan-400 py-[20px] px-[20px] hover:shadow-2xl hover:shadow-cyan-400 rounded-[15px]">
                            <div className=" w-[20px]  mx-auto">
                                <IoCodeSharp className='text-cyan-400 text-[30px]'/>
                            </div>
                            <h2 className=' font-prot font-bold text-[30px] text-slate-400  py-[10px]'>Web Build</h2>
                            <p className=' font-prot font-medium text-[20px] text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Natus, blanditiis dolor pariatur adipisci nemo totam,
                                 tempora ipsam excepturi harum ullam debitis quae eius quidem quam, nam fuga necessitatibus enim nulla.</p>
                            <div className=" px-[15px] py-[8px] rounded-[5px] inline-block cursor-pointer bg-cyan-400 text-black hover:bg-white duration-300 my-[20px] ">
                                <a className=' font-prot font-medium text-[20px] '>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default What
