import React from "react";

const Article = () => {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <article className="flex flex-col md:flex-row items-center justify-center px-5 py-10">
      {/* Article Content */}
      <div className="article-content flex-1 flex flex-col items-start justify-center">
        <div className="article-head mb-9">
          <h1 className="text-3xl font-normal">Empowering Student Creativity</h1>
        </div>

        <div className="article-button flex flex-col gap-2">
          <button
            className="button border-2 border-gradient-90 bg-transparent text-white py-2 px-5 cursor-pointer"
            onClick={() => handleButtonClick("create-project.html")}
          >
            Create Project
          </button>
          <button
            className="button border-2 border-gradient-90 bg-transparent text-white py-2 px-5 rounded-md cursor-pointer"
            onClick={() => handleButtonClick("apply-internship.html")}
          >
            Apply for Internship
          </button>
          <button
            className="button bg-gradient-to-r from-cyan-400 to-indigo-600 text-white py-2 px-5 rounded-full cursor-pointer hover:drop-shadow-lg"
            onClick={() => handleButtonClick("join-team.html")}
          >
            Join a team
          </button>
        </div>
      </div>

      {/* Article Image */}
      <div className="article-image-container flex-1 flex justify-center items-center">
        <div className="article-image relative">
          <img
            src=".../images/people-collaborating-online.svg"
            alt="Collaboration"
            className="w-full h-auto"
          />
          <div className="image-overlay absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <p className="text-white text-lg text-center">Explore opportunities to collaborate and grow.</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
