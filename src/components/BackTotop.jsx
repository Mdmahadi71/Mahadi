import React, { useEffect, useState } from 'react'

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
    
  return (
    <div>
      
    </div>
  )
}

export default BackTotop
