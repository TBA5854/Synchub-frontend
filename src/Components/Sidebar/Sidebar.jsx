import { Bell, Compass, Home, User } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="border border-3 border-black w-28 bg-black rounded-xl py-8 flex flex-col justify-between items-center">
        {/* logo  */}
        <Link to={"/"}>
          <img src="/logo.png" alt="logo" className="w-8" />
        </Link>

        {/* Navigation panel  */}
        <div>
          <ul className="flex flex-col gap-12">
            <li>
              <NavLink
                to="home"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-400" : "text-white"
                  } hover:text-gray-400`
                }
              >
                <Home size={30} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="trending"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-400" : "text-white"
                  } hover:text-gray-400`
                }
              >
                <Compass size={30} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="notification"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-400" : "text-white"
                  } hover:text-gray-400`
                }
              >
                <Bell size={30} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-400" : "text-white"
                  } hover:text-gray-400`
                }
              >
                <User size={30} />
              </NavLink>
            </li>
          </ul>
        </div>

        {/* profile  */}
        <div className="bg-slate-600 h-14 w-14 rounded-full "></div>
      </div>
    </>
  );
};

export default Sidebar;
