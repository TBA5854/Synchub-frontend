import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/logo.png';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className='w-full h-[10vh] flex flex-row justify-between items-center content-center text-base p-3 md:px-8 md:py-12 text-white lg:text-xl bg-transparent absolute'>

        {/* left - menu */}
        <div>
          <ul className='hidden lg:flex flex-row justify-center items-center content-center gap-8 bg-[#7168685c] py-1 px-4 rounded-3xl backdrop-blur-sm lg:gap-10'>
            <li><NavLink to="/" className={({isActive}) => `${isActive ? "text-blue-400" : "text-white"} hover:text-gray-400`}>Home</NavLink></li>
            <li><NavLink to="teams" className={({isActive}) => `${isActive ? "text-blue-400" : "text-white"} hover:text-gray-400`}>Teams</NavLink></li>
            <li><NavLink to="hackathons" className={({isActive}) => `${isActive ? "text-blue-400" : "text-white"} hover:text-gray-400`}>Hackathons</NavLink></li>
            <li><NavLink to="about" className={({isActive}) => `${isActive ? "text-blue-400" : "text-white"} hover:text-gray-400`}>About</NavLink></li>
          </ul>

          {/* Hamburger icon*/}
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
          </div>

          {/*hamburger menu*/}
          {isOpen && (
            <div className="absolute top-[10vh] left-0 w-full bg-[#000000b4] backdrop-blur-sm p-4">
              <ul className="flex flex-col gap-4 text-white">
                <li><NavLink to="/" className={({ isActive }) => `${isActive ? "text-blue-400" : "text-white"} hover:text-gray-400`}>Home</NavLink></li>
                <li><NavLink to="teams" className={({ isActive }) => `${isActive ? "text-blue-400" : "text-white"} hover:text-gray-400`}>Teams</NavLink></li>
                <li><NavLink to="hackathons" className={({ isActive }) => `${isActive ? "text-blue-400" : "text-white"} hover:text-gray-400`}>Hackathons</NavLink></li>
                <li><NavLink to="about" className={({ isActive }) => `${isActive ? "text-blue-400" : "text-white"} hover:text-gray-400`}>About</NavLink></li>
              </ul>
            </div>
          )}
        </div>

        {/* center - logo */}
        <div>
          <img src={logo} alt="synchub logo" className='w-8 md:w-full' />
        </div>

        {/* right - buttons */}
        <div className='flex gap-4 md:text-xl'>
          <button className='hidden md:block px-4 py-1 bg-black rounded-3xl md:px-12'>Sign up</button>
          <button className='px-4 py-1 bg-[rgb(69,90,205)] rounded-3xl md:px-12'>Log in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
