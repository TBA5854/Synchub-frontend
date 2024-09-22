import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-teal-300 to-blue-700 text-black rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-2">
        <div className="max-w-4xl h-56 mx-auto text-3xl">
          <h5 className="font-medium mb-2">SyncHub</h5>
          <div className="flex justify-start items-start text-sm font-light">
            {/* Contact List */}
            <ul className="list-none p-0 m-2 flex flex-col justify-start items-start">
              <li>
                <h6 className="font-normal">Contact</h6>
              </li>
              <li>
                <p className="my-1">
                  VIT Vellore
                  <br />
                  632014
                </p>
              </li>
              <li>
                <p className="my-1">
                  General Inquiries
                  <br />
                  teamsync@gmail.com
                </p>
              </li>
            </ul>
            {/* Terms & Conditions List */}
            <ul className="list-none p-0 m-2 flex-1 flex flex-col justify-start items-start">
              <li>
                <h6 className="text-base font-normal">Terms & Conditions</h6>
              </li>
              <li>
                <p className="my-1">Privacy Policy</p>
              </li>
              <li>
                <p className="my-1">Follow</p>
              </li>
            </ul>
            {/* Subscribe List */}
            <ul className="list-none p-0 m-2 flex-1 flex flex-col justify-start items-start">
              <li>
                <h6 className="text-base font-normal">Subscribe</h6>
              </li>
              <li>
                <span className="my-1">
                  Stay Updated on the latest from SyncHub
                </span>
              </li>
              <li>
                <button className="mt-8 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
