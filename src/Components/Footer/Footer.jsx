import React from "react";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-white px-2 py-6 md:py-20 text-black flex justify-start md:justify-center gap-3 md:gap-8 ">
        {/* logo  */}
        <div>
          <img src={logo} alt="logo img" />
        </div>

        {/* content  */}
        <div className="flex flex-col justify-start lg:gap-3 min-h-72 lg:w-[60vw]">
          <div>
            <h2 className="text-3xl lg:text-6xl font-semibold"><Link to="/" onClick={() => window.scrollTo(0, 0)}>SyncHub</Link></h2>
          </div>
          <div className="flex md:text-xl md:justify-between flex-wrap py-6 gap-6 md:gap-0">
            {/* Contact List */}
            <ul>
              <li>
                <h3 className="text-xl md:text-2xl font-semibold py-6">Contact</h3>
              </li>
              <li>VIT Vellore</li>
              <li>632014</li>
              <li>General Inquiries</li>
              <li>teamsync@gmail.com</li>
            </ul>
             
            {/* Terms & Conditions List */}
            <ul>
              <li>
                <h3 className="text-xl md:text-2xl font-semibold py-6">Terms & Conditions</h3>
              </li>
              <li>Privacy Policy</li>
              <li>Follow</li>
            </ul>
            {/* help*/}
            <ul>
              <li>
                <h3 className="text-xl md:text-2xl font-semibold py-6">Help</h3>
              </li>
              <li>Support</li>
              <li>FAQs</li>
              <li>Collections</li>
            </ul>
      
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
