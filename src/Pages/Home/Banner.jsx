import React from "react";

const Banner = () => {
  return (
    <div className="banner flex items-start justify-between bg-gradient-to-b from-teal-300 to-blue-600 py-5 px-14 rounded-tr-[6rem] mx-auto">
      {/* Banner Image */}
      <div className="banner-img flex-2 hidden md:flex relative -bottom-[1.3rem]">
        <img
          src=".../images/Group.svg"
          alt="Banner"
          className="w-full h-[250px] object-contain"
        />
      </div>

      {/* Banner Text */}
      <div className="banner-text flex-4 text-start md:text-start">
        <h2 className="text-4xl md:text-6xl font-light leading-tight text-gray-800">
          Get bored of academic curriculum!
        </h2>
        <p className="text-sm md:text-lg text-gray-600 mt-4 max-w-[60%] md:max-w-[90%]">
          SyncHub is dedicated to providing a platform where students can unleash
          their full potential and thrive in a community of like-minded peers.
        </p>
      </div>
    </div>
  );
};

export default Banner;
