import React, { useState } from "react";

const Aside = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      console.log('Email submitted:', email);
      setMessage('Success! Email submitted.');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="aside flex flex-col items-center justify-center py-2">
      <div className="aside-header text-center mb-5 max-w-3xl">
        <span className="text-lg font-light text-white">
          Elevate your student experience with SyncHub's cutting-edge solutions designed to maximize productivity and collaboration.
        </span>
      </div>

      <div className="aside-form flex">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="max-h-10 px-3 py-2 border-none rounded-l-lg bg-gradient-to-r from-indigo-900 to-cyan-400 text-white w-52"
        />
        <button
          onClick={handleSubmit}
          className="border-none rounded-r-lg bg-cyan-400 h-10 cursor-pointer flex items-center justify-center"
        >
          <img src=".../images/Arrow.svg" alt="Submit" className="h-full" />
        </button>
      </div>

      {message && (
        <div className="text-white mt-2">
          {message}
        </div>
      )}

      <div className="frame-image flex items-center justify-center pt-8">
        <img src=".../images/Frame 427318907.svg" alt="Frame" className="max-w-full max-h-48" />
      </div>
    </div>
  );
};

export default Aside;
