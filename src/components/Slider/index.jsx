import React, { useState } from 'react'
import './index.css'
const Slider = () => {

    const [src,setSrc]=useState('https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg.webp')

    const handleClick =(e) =>{
        
        setSrc(e.target.src)
    }

  return (
    <div>
        <div className='slider_container parent'>
            <div className='div1'>
                <img src={src} alt="" />
            </div>
            <div className='div2'>

                <img  onClick={(e)=>handleClick(e)} src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg.webp" alt="" />
            </div>
            <div className='div3' >

                <img  onClick={(e)=>handleClick(e)} src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg.webp" alt="" />
            </div>
            <div className='div4' >

                <img onClick={(e)=>handleClick(e)} src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Slider
