import React, { useEffect, useState } from 'react'
import Container from './Container'
import { IoIosArrowUp } from "react-icons/io";

const BackTotop = () => {
    let [ BackTo ,setBackTo] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll' , ()=>{
            if(window.scrollY > 100){
                setBackTo(true)
            }else{
                setBackTo(false)
            }
        })
    },[])
    let setUp=(()=>{
        window.scrollTo({
            top:'0',
            behavior:'smooth',
        })
    })
  return (
    <div>
        {BackTo &&
      <Container>
        <button className=' w-[50px] h-[50px] text-[50px] bottom-[50px] lg:right-[40px] right-[10px] fixed bg-sky-500 rounded-[5px]' onClick={setUp}><IoIosArrowUp/></button>
      </Container>
      }
    </div>
  )
}

export default BackTotop
