import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className='w-full h-[10vh] flex flex-row justify-between items-center content-center text-base px-14 text-white lg:text-xl'>

        {/* left  */}
        <div>
        <ul className='flex flex-row justify-center items-center content-center gap-8 bg-[#8b7e7e6e] py-1 px-4 rounded-3xl backdrop-blur-md lg:gap-10'>
          <li><NavLink to="/" className={({isActive}) => `${isActive ? "text-blue-400" : "text-white"}`}>Home</NavLink></li>
          <li><NavLink to="teams" className={({isActive}) => `${isActive ? "text-blue-400" : "text-white"}`}>Teams</NavLink></li>
          <li><NavLink to="hackathons" className={({isActive}) => `${isActive ? "text-blue-400" : "text-white"}`}>Hackathons</NavLink></li>
          <li><NavLink to="about" className={({isActive}) => `${isActive ? "text-blue-400" : "text-white"}`}>About</NavLink></li>
        </ul>
        </div>

        {/* right  */}
        <div className='flex gap-4'>
          <button className='px-12 py-1 text-lg bg-black rounded-3xl'>Sign in</button>
          <button className='px-12 py-1 text-lg bg-[rgb(69,90,205)] rounded-3xl'>Log in</button>
        </div>
      </div>
    </>
  ) 
 }

export  default Navbar