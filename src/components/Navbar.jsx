import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let [show, setshow] = useState(false)
    let hendelbars = () => {
        setshow(!show)
    }

    return (
        <div className='fixed top-0 left-0 w-full py-[15px] text-center bg-slate-400 z-50'>
            <Container>
                <Flex className={`justify-between items-center`}>
                    <div className="w-[50%]">
                        <h2 className='font-prot font-bold text-[18px] text-[#262626]'>MA<samp className='font-prot font-bold text-[22px] text-white'> HA</samp>DI</h2>
                    </div>
                    <div className={`w-[50%] items-center absolute lg:static duration-300 ${show == true ? ' top-[70px] left-0 bg-slate-400 w-full' : 'top-[70px] left-[-400px] w-full'}`}>
                        <ul className='lg:flex gap-x-[50px] lg:text-start text-center lg:py-0 py-3 '>
                            <li className=' font-prot font-bold text-[18px] text-[#262626] lg:py-0 py-3 hover:text-white duration-300 scroll-smooth'>
                                <a href="#Home">Home</a>
                            </li>
                            <li className=' font-prot font-bold text-[18px] text-[#262626] lg:py-0 py-3 hover:text-white duration-300 scroll-smooth'>
                                <a href="#About">About</a>
                            </li>
                            <li className=' font-prot font-bold text-[18px] text-[#262626] lg:py-0 py-3 hover:text-white duration-300 scroll-smooth' >
                                <a href="#Services">Services</a>
                            </li>
                            <li className=' font-prot font-bold text-[18px] text-[#262626] lg:py-0 py-3 hover:text-white duration-300 scroll-smooth'>
                                <a href="#Skills">Skills</a>
                            </li>
                            <li className=' font-prot font-bold text-[18px] text-[#262626] lg:py-0 py-3 hover:text-white duration-300 scroll-smooth'>
                                <a href="#Project">Projects</a>
                            </li>
                            <li className=' font-prot font-bold text-[18px] text-[#262626] lg:py-0 py-3 hover:text-white duration-300 scroll-smooth'>
                                <a href="#Connect">Connect</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" text-[22px] pt-2 lg:hidden " onClick={hendelbars}>
                        {show ? <RxCross2 /> : <FaBars />}
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Navbar
