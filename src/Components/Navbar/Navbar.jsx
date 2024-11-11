import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[10vh] flex flex-row justify-between items-center content-center text-base p-3 md:px-12 md:py-16 text-white lg:text-xl bg-transparent absolute">

        {/* left - logo for desktop */}
        <div className="md:w-[10vw] hidden md:block">
          <Link to="/">
            <img
              src={logo}
              alt="synchub logo"
              className="w-8 md:w-auto"
            />
          </Link>
        </div>

        {/* center - menu */}
        <div>
          <ul className="hidden lg:flex flex-row justify-center items-center content-center gap-8 bg-[#7168685c] py-2 px-8 rounded-3xl backdrop-blur-sm lg:gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-400" : "text-white"
                  } hover:text-gray-400`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="teams"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-400" : "text-white"
                  } hover:text-gray-400`
                }
              >
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink
                to="hackathons"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-400" : "text-white"
                  } hover:text-gray-400`
                }
              >
                Hackathons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-400" : "text-white"
                  } hover:text-gray-400`
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          {/* Hamburger icon*/}
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
          </div>

          {/*hamburger menu*/}
          {isOpen && (
            <div className="absolute top-[10vh] left-0 w-full bg-[#000000b4] backdrop-blur-sm p-4">
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-blue-400" : "text-white"
                      } hover:text-gray-400`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="teams"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-blue-400" : "text-white"
                      } hover:text-gray-400`
                    }
                  >
                    Teams
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="hackathons"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-blue-400" : "text-white"
                      } hover:text-gray-400`
                    }
                  >
                    Hackathons
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-blue-400" : "text-white"
                      } hover:text-gray-400`
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* center - logo for mobile*/}
        <div className="md:hidden">
          <Link to="/">
            <img src={logo} alt="synchub logo" className="w-8 md:w-full"/>
          </Link>
        </div>


        {/* right - login button */}
        <div className="md:text-xl md:w-[10vw]">
          <button>
            <NavLink
              to="/Login"
              className="px-4 py-1 bg-[rgb(69,90,205)] rounded-3xl md:px-12"
            >
              Login
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
