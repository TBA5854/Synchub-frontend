import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className='w-full h-[10vh] flex flex-row justify-around items-center content-center px-5 text-base lg:text-2xl lg:px-0'>

        {/* logo */}
        <div>SyncHub</div>

        {/* links */}
        <ul className='flex flex-row justify-center items-center content-center gap-10 lg:gap-20 lg:pl-[10vw]'>
          <li><NavLink to="/" className={({isActive}) => `${isActive ? "text-blue-400" : "text-white"}`}>Home</NavLink></li>
          <li><NavLink to="teams" className={({isActive}) => `${isActive ? "text-blue-400" : "text-white"}`}>Teams</NavLink></li>
          <li><NavLink to="hackathons" className={({isActive}) => `${isActive ? "text-blue-400" : "text-white"}`}>Hackathons</NavLink></li>
        </ul>
          
          {/* search bar */}
          <div className='text-sm lg:text-xl'>
          <input type="search" placeholder='Type something' name="" id="" className='bg-white text-black rounded-s-xl pl-4 py-1 w-24 lg:w-44 h-auto'/>
          <button className='bg-blue-500 rounded-e-xl lg:w-20 lg:inline py-1 h-auto hidden'>Search</button>
          <button className='bg-blue-500 rounded-e-xl p-1 h-auto lg:hidden'>🔍</button>
          </div>
      </div>
    </>
  ) 
 }

export  default Navbar