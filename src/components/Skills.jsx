import React, { useEffect, useState } from 'react'
import Container from './Container'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Skills = () => {

  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [scss, setScss] = useState(0);
  const [java, setJava] = useState(0);
  const [react, setReact] = useState(0);
  const [tailwind, setTailwind] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (html < 92) {
        setHtml(html + 1);
      }
      if (css < 92) {
        setCss(css + 1);
      }
      if (scss < 65) {
        setScss(scss + 1);
      }
      if (java < 55) {
        setJava(java + 1);
      }
      if (react < 78) {
        setReact(react + 1);
      }
      if (tailwind < 80) {
        setTailwind(tailwind + 1);
      }
    }, 2);
  },);

  return (
    <div className='bg-slate-900 lg:py-[80px]'>
      <Container>
        <div className="">
          <div className=" text-center ">
            <h3 className=' font-prot font-bold text-[36px] text-slate-400'>Skills</h3>
            <h3 className=' font-prot font-semibold text-[20px] text-slate-400 py-2'>I love to learn new things and experiment with new technologies.
              These are some of the major languages, technologies, tools and platforms I have worked with:</h3>
          </div>
        </div>

        <div className="flex justify-between py-[50px]">
          <div className="lg:flex justify-between">
            <div className="lg:py-0 py-[20px]">
              <div data-aos='fade-up' className='w-[82%]'>
                <h2 className='text-center lg:text-[24px] text-[16px] text-slate-400 font-prot font-semibold lg:pb-[30px] pb-[20px]'>HTML</h2>
                <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={html} text={`${html}%`} />
              </div>
            </div>
            <div className=" lg:py-0 py-[20px]">
              <div data-aos='fade-up' className='w-[82%]'>
                <h2 className='text-center lg:text-[24px] text-[18px] text-slate-400 font-prot font-semibold lg:pb-[30px] pb-[20px]'>Css</h2>
                <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={css} text={`${css}%`} />
              </div>
            </div>
            <div className="lg:py-0 py-[20px]">
              <div data-aos='fade-up' className='w-[82%]'>
                <h2 className='text-center lg:text-[24px] text-[18px] text-slate-400  font-prot font-semibold lg:pb-[30px] pb-[20px]'>Scss</h2>
                <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={scss} text={`${scss}%`} />
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between">
            <div className="lg:py-0 py-[20px]">
              <div data-aos='fade-up' className='w-[82%]'>
                <h2 className='text-center lg:text-[24px] text-[18px] text-slate-400 font-prot font-semibold lg:pb-[30px] pb-[20px]'>Java</h2>
                <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={java} text={`${java}%`} />
              </div>
            </div>
            <div className="lg:py-0 py-[20px]">
              <div data-aos='fade-up' className='w-[82%]'>
                <h2 className='text-center lg:text-[24px] text-[18px] text-slate-400 font-prot font-semibold lg:pb-[30px] pb-[20px]'>React</h2>
                <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={react} text={`${react}%`} />
              </div>
            </div>
            <div className="lg:py-0 py-[20px]">
              <div data-aos='fade-up' className='w-[82%]'>
                <h2 className='text-center lg:text-[24px] text-[18px] text-slate-400 font-prot font-semibold lg:pb-[30px] pb-[20px]'>Tailwind Css</h2>
                <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={tailwind} text={`${tailwind}%`} />
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Skills
