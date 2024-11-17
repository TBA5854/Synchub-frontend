import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-8xl font-bold gap-8">
      404 Not Found
      <button className="text-3xl border-2 border-stone-600 py-2 px-7 rounded-3xl shadow-lg hover:shadow-zinc-500">
        <Link to="/">Go back to home</Link>
      </button>
    </div>
  );
};

export default Error;
