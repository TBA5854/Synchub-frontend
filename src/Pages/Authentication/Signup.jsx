import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "../../assets/Logo/google.svg";
import apple from "../../assets/Logo/apple.svg";
import facebook from "../../assets/Logo/facebook.svg";
import logo from "/logo.png";
const Signup = () => {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [password, setpassword] = useState("");
  const [grade, setgrade] = useState("");
  const [terms, setterms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleToggle = () => {
    setterms(!terms);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-10 text-lg">
      {/* logo */}
      <div>
        <Link to="/">
          <img src={logo} alt="synchub logo" />
        </Link>
      </div>
      <div className="text-3xl lg:text-5xl font-semibold">
        <h2>GET STARTED</h2>
      </div>

      <div className="bg-black w-[90vw] rounded-3xl lg:min-w-[75vw] lg:min-h-[70vh] flex flex-col lg:flex-row lg:py-10 ">
        {/* form  */}
        <div className="lg:w-3/4 flex flex-col justify-top pt-3 p-10 items-center lg:border-r-2 gap-7 lg:pt-3 lg:p-6">
          <h3 className="text-2xl">Signup</h3>
          <form action="" className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* name input  */}
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  className={`text-black bg-blue-100 px-4 py-1 rounded-xl shadow-md ${
                    name ? "shadow-green-500" : "shadow-red-500"
                  }`}
                />
              </div>

              {/* username input  */}
              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  className={`text-black bg-blue-100 px-4 py-1 rounded-xl shadow-md ${
                    username ? "shadow-green-500" : "shadow-red-500"
                  }`}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* email input  */}
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className={`text-black bg-blue-100 px-4 py-1 rounded-xl shadow-md ${
                    email ? "shadow-green-500" : "shadow-red-500"
                  }`}
                />
              </div>

              {/* age input  */}
              <div className="flex flex-col">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  name="age"
                  id="age"
                  value={age}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (
                      value === "" ||
                      (parseInt(value, 10) >= 1 && parseInt(value, 10) <= 100)
                    ) {
                      setage(value);
                    }
                  }}
                  className={`text-black bg-blue-100 px-4 py-1 rounded-xl shadow-md ${
                    age ? "shadow-green-500" : "shadow-red-500"
                  }`}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* password input  */}
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className={`text-black bg-blue-100 px-4 py-1 rounded-xl border shadow-md w-full ${
                      password ? "shadow-green-500" : "shadow-red-500"
                    }`}
                  />

                  {/* Eye Icon for toggling visibility */}
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl"
                  >
                    {showPassword ? "👀" : "🙈 "}
                  </span>
                </div>
              </div>

              {/* grade input  */}
              <div className="flex flex-col">
                <label htmlFor="grade">Grade</label>
                <input
                  type="text"
                  name="grade"
                  id="grade"
                  value={grade}
                  onChange={(e) => setgrade(e.target.value)}
                  className={`text-black bg-blue-100 px-4 py-1 rounded-xl shadow-md ${
                    grade ? "shadow-green-500" : "shadow-red-500"
                  }`}
                />
              </div>
            </div>

            {/* terms and conditions  */}
            <div>
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={terms}
                onClick={handleToggle}
                className={`text-black bg-blue-100 px-4 py-1 rounded-xl shadow-md ${
                  terms ? "shadow-green-500" : "shadow-red-500"
                }`}
              />
              <label htmlFor="terms">
                I agree to platform’s Terms of Service and Privacy Policy
              </label>
            </div>

            {/* login button  */}
            <div className="mt-4">
              <input
                type="submit"
                value="Signup"
                className={`w-full text-xl text-black font-semibold bg-blue-500 text-center p-1 rounded-xl ${
                  username && password ? "cursor-pointer" : "cursor-not-allowed"
                }`}
                onClick={
                  password && username && name && email && age && grade && terms
                    ? handleClick
                    : (e) => {
                        e.preventDefault();
                        alert("Enter all values");
                      }
                }
              />
            </div>
          </form>
        </div>

        {/* social signup */}
        <div className="lg:w-1/2 flex flex-col gap-10 justify-top p-16 items-center">
          <h2 className="text-center text-2xl">Signup using</h2>
          <button className="bg-blue-100 min-w-64 rounded-xl flex flex-row px-2 py-1 text-black font-bold text-xl">
            <img src={google} alt="google logo" className="w-8" />
            <span className="pl-14">Google</span>
          </button>
          <button className="bg-blue-100 min-w-64 rounded-xl flex flex-row px-2 py-1 text-black font-bold text-xl">
            <img src={apple} alt="apple logo" className="w-8" />
            <span className="pl-14">Apple id</span>
          </button>
          <button className="bg-blue-100 min-w-64 rounded-xl flex flex-row px-2 py-1 text-black font-bold text-xl">
            <img src={facebook} alt="facebook logo" className="w-8" />
            <span className="pl-14">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
