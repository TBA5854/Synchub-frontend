import React from "react";
import img1 from "../../assets/images/vector.svg";
const Hero = () => {
  const handleJoinClick = () => {
    alert("Thank you for your interest in joining a team!");
  };

  return (
    <>
    {/* hero section  */}
      <div className="min-h-[90vh] flex flex-col justify-center items-start lg:items-center lg:flex-row pl-14">

        {/* text content  */}
        <div className="pt-24 h-[50vh] flex flex-col justify-around items-start md:w-[40vw] md:pt-0">
          <h1 className="text-4xl md:text-7xl">Discover. Engage. Succeed</h1>
          <span className="text-xl md:text-3xl">
            Your one-stop productive social media partner
          </span>
          <button
            onClick={handleJoinClick}
            className="py-2 px-6 text-lg font-light bg-gradient-to-b from-blue-400 to-blue-600 text-white rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 transition duration-300"
          >
            Join a team
          </button>
        </div>

        {/* Image Content */}
        <div>
          <img width="600px" src={img1} alt="Team vector" />
        </div>
      </div>
    </>
  );
};

export default Hero;
