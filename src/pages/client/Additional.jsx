import React from "react";
import logo from "../../assets/home/logo.png";
import tarazoImg from "../../assets/login/tarazo.png";
import { Link } from "react-router-dom";

const Additional = () => {
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
        <div className="flex flex-col items-center justify-center gap-6 ">
          <p className="text-2xl">Additional Information</p>
          <input
            className="border-1 rounded-xl px-6 py-2"
            type="text"
            name=""
            id=""
            placeholder="Select Your Country"
          />
          <input
            className="border-1 rounded-xl px-6 py-2"
            type="text"
            name=""
            id=""
            placeholder="Enter Your Phone Number"
          />
          <input
            className="border-1 rounded-xl px-6 py-2"
            type="text-area"
            name=""
            id=""
            placeholder="Your Bio"
          />
          <Link to="/categories">
            <button className="px-24 py-2 font-bold bg-blue-400 border-0 rounded-3xl text-white">
              Signup
            </button>
          </Link>
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

export default Additional;
