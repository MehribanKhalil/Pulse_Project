import React, { useState } from 'react'
import './index.css'
import { FaPhone,FaBars } from "react-icons/fa6";
const Navbar = () => {
 
  const [active,setActive]=useState(false)
  const handleOpen=()=>{
    setActive(!active)
  }

  return (

    <>
    
    <nav className='navbar'>
      <div className='nav_logo'>
        <h2>Pulse <span>.</span></h2>
      </div>
      
      <div className='mobile_nav_icon' onClick={handleOpen}>
        <FaBars />

      </div>

        
        <ul className='nav_links'>
          <li> <a href=""> Home</a> </li>
          <li><a href="">About us</a></li>
          <li><a href="">Restaurant</a> </li>
          <li><a href="">News</a> </li>
          <li><a href="">Contact</a> </li>
        </ul>

       
      
        <div className='reservation'>

       <p><span>Reservations</span> <FaPhone /> 652-345 3222 11</p>
      </div>
    </nav>

    <nav className='mobile_nav'>
    <ul className={` ${active ? 'open' : "close"} `}>
          <li> <a href=""> Home</a> </li>
          <li><a href="">About us</a></li>
          <li><a href="">Restaurant</a> </li>
          <li><a href="">News</a> </li>
          <li><a href="">Contact</a> </li>
        </ul>
    </nav>
    </>
    

    
  )
}

export default Navbar
