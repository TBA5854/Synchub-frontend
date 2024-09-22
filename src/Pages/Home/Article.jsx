import React from "react";
import peopleImg from "../../assets/images/people-collaborating-online.svg";
import { useNavigate } from "react-router-dom";
const Article = () => {
  const navigate=useNavigate();
  const handleButtonClick = () => {
    navigate("/teams");
  };

  return (
    <>
      <article className="flex flex-col md:flex-row justify-center content-center min-h-screen p-10">
        {/* Article Content */}
        <div className="flex flex-col gap-8 items-start justify-evenly md:w-[50vw]  md:pl-44 md:gap-0">

          <h1 className="text-4xl md:leading-normal md:6xl font-thin">
            Empowering Student Creativity
          </h1>

          <div className="article-button flex flex-col gap-8 text-base md:text-2xl ">
            <button
              className="border-2 px-9 py-2 rounded-3xl border-bg "
              onClick={handleButtonClick}
            >
              Create Project
            </button>
            <button
              className="border-2 px-9 py-2 rounded-3xl border-bg "
              onClick={handleButtonClick}
            >
              Apply for Internship
            </button>
            <button
              className="bg-gradient-to-r from-cyan-400 to-indigo-600 text-white py-2 px-5 rounded-full hover:drop-shadow-lg"
              onClick={handleButtonClick}
            >
              Join a team
            </button>
          </div>
        </div>

        {/* Article Image */}
        <div>
          <img width="800" src={peopleImg} alt="Collaboration"/>
        </div>
      </article>
    </>
  );
};

export default Article;
