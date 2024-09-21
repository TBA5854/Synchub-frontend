import React from "react";

const TeamSection = () => {
  const handleJoinClick = () => {
    window.location.href = "join-team.html";
    // Alternatively, display a message
    // alert("Thank you for your interest in joining a team!");
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-10">
      {/* Text Content */}
      <div className="text-content flex-1 lg:pr-12">
        <h2 className="text-4xl lg:text-6xl font-light tracking-wider leading-tight">
          Discover. Engage. Succeed
        </h2>
        <span className="block text-lg lg:text-2xl font-light my-5">
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
      <div className="image-content flex-1 mt-8 lg:mt-0">
        <img
          src=".../images/vector.svg"
          alt="Team vector"
          className="max-w-full h-auto object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default TeamSection;
