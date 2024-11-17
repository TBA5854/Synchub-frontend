import React from "react";
import { Link } from "react-router-dom";
const logo = "./logo.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-white text-black flex flex-col items-center gap-8 py-24">
        {/*upper- logo+name  */}
        <div className="flex flex-row justify-center items-center gap-10">
          <img src={logo} alt="logo img" />
          <h2 className="text-6xl font-semibold">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              SyncHub
            </Link>
          </h2>
        </div>

        {/*lower- content  */}
        <div className="w-full flex flex-row md:text-xl flex-wrap py-6 gap-12 md:flex-nowrap md:gap-0">
          <div className="w-full flex flex-row justify-around">
            {/* Contact List */}
            <ul className="flex flex-col gap-6 text-gray-600 justify-evenly min-w-[30vw] md:min-w-0">
              <li className="text-2xl md:text-2xl font-semibold text-black">
                Contact
              </li>
              <li>
                VIT Vellore <div>632014</div>
              </li>
              <li>General Inquiries</li>
              <li>teamsync@gmail.com</li>
              <li>
                <span className="font-semibold text-black">Phone: </span>9117203884
              </li>
            </ul>

            {/* links  */}
            <ul className="flex flex-col gap-6 text-gray-600 justify-evenly min-w-[30vw] md:min-w-0">
              <li className="text-2xl md:text-2xl font-semibold text-black">
                Links
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/terms">Terms of services</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy policy</Link>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-row justify-around">
            {/* services  */}
            <ul className="flex flex-col gap-6 text-gray-600 justify-evenly min-w-[30vw] md:min-w-0">
              <li className="text-2xl md:text-2xl font-semibold text-black">
                Services
              </li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
              <li>
                <Link to="/hackathons">Hackathons</Link>
              </li>
              <li>
                <Link to="/eduq">EduQ</Link>
              </li>
              <li>
                <Link to="/technika">Technika</Link>
              </li>
            </ul>

            {/* help*/}
            <ul className="flex flex-col gap-6 text-gray-600 justify-evenly min-w-[30vw] md:min-w-0">
              <li className="text-2xl md:text-2xl font-semibold text-black">
                Help
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/collections">Collections</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
