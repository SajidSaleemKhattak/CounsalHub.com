import React from "react";
import logo from "../assets/home/logo.png";
import tarazoImg from "../assets/login/tarazo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="grid grid-cols-2 relative">
      <div className="w-80% bg-amber-200 mt-10 mx-10 ">
        <div className="flex justify-between bg-sky-400 ">
          <img src={logo} className="w-[219px] h-[57px]" alt="" />
          <Link to="/">
            <button className="px-8 py-2 bg-blue-400 border-0 rounded-3xl text-white">
              Back to Website
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-2xl">Welcome to Counsal Hubs</p>
          <p>Please Enter Your Email and Password</p>
          <input
            className="border-1 rounded-xl px-6 py-2"
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
          />
          <input
            className="border-1 rounded-xl px-6 py-2"
            type="password"
            name=""
            id=""
            placeholder="Enter Your Password"
          />
          <button className="px-18 py-2 bg-blue-400 border-0 rounded-3xl text-white">
            Login
          </button>
          <div className="flex w-[50%] items-center gap-5 bg-green-300">
            <hr className="w-[20%]" />
            <p>Or Login With</p>
            <hr className="w-[20%]" />
          </div>
          <div className="flex justify-between gap-6">
            <img src="" alt="facebook" />
            <img src="" alt="Google" />
            <img src="" alt="X" />
          </div>
          <p>
            Didn't Have an account -
            <Link to="/signup">
              <span className="text-blue-400">Signup</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-violet-200 w-[35%]">
        <img
          src={tarazoImg}
          className=" h-screen w-[35%] absolute top-0 right-0"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
