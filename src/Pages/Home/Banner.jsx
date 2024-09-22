import React from "react";
import groupImg from "../../assets/images/Group.svg";
const Banner = () => {
  return (
    <>
      <div className="flex items-start justify-between bg-gradient-to-b from-teal-300 to-blue-900 px-14 pt-12 rounded-tr-[10rem] mx-auto">
        {/* Banner Image */}
        <div className="hidden md:flex pt-16">
          <img
            src={groupImg}
            alt="Banner"
            className="w-full h-[250px]"
          />
        </div>

        {/* Banner Text */}
        <div className="text-start">
          <h2 className="text-4xl md:text-6xl leading-tight md:w-[40vw] text-black">
            Get bored of academic curriculum!
          </h2>
          <p className="text-sm md:text-lg text-gray-800 mt-4 max-w-[60%] md:max-w-[90%] pb-12">
            SyncHub is dedicated to providing a platform where students can
            unleash their full potential and thrive in a community of
            like-minded peers.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
