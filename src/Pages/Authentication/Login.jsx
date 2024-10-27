import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "../../assets/Logo/google.svg";
import apple from "../../assets/Logo/apple.svg";
import facebook from "../../assets/Logo/facebook.svg";
import logo from "/logo.png";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-10 text-lg">

      {/* logo */}
      <div>
        <Link to="/"><img src={logo} alt="synchub logo" /></Link>
      </div>
      <div className="text-3xl lg:text-5xl font-semibold">
        <h2>WELCOME BACK</h2>
      </div>

      <div className="bg-black w-[90vw] rounded-3xl lg:w-[60vw] lg:h-[70vh] flex flex-col lg:flex-row lg:py-10">
        {/* form  */}
        <div className="lg:w-1/2 flex flex-col justify-top pt-16 items-center lg:border-r-2 gap-7">
          <h3 className="text-2xl">Login</h3>
          <form action="" className="flex flex-col gap-6">
            {/* username input  */}
            <div className="flex flex-col">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                name="name"
                id="name"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className={`text-black bg-blue-100 px-4 py-1 rounded-xl shadow-md ${
                  username ? "shadow-green-500" : "shadow-red-500"
                }`}
              />
            </div>

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
            <div className="mt-4">
              <input
                type="submit"
                value="Login"
                className={`w-full text-xl text-black font-semibold bg-blue-500 text-center p-1 rounded-xl ${
                  username && password ? "cursor-pointer" : "cursor-not-allowed"
                }`}
                onClick={
                  password && username
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

        {/* social login */}
        <div className="lg:w-1/2 flex flex-col gap-10 justify-top p-16 items-center">
          <h2 className="text-center text-2xl">Login using</h2>
          <button className="bg-blue-100 min-w-64 rounded-xl flex flex-row px-2 py-1 text-black font-bold text-xl">
            <img src={google} alt="google logo" className="w-8"/>
            <span className="pl-14">Google</span>
          </button>
          <button className="bg-blue-100 min-w-64 rounded-xl flex flex-row px-2 py-1 text-black font-bold text-xl">
            <img src={apple} alt="apple logo" className="w-8"/>
            <span className="pl-14">Apple id</span>
          </button>
          <button className="bg-blue-100 min-w-64 rounded-xl flex flex-row px-2 py-1 text-black font-bold text-xl">
            <img src={facebook} alt="facebook logo" className="w-8"/>
            <span className="pl-14">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
