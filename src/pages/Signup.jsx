import React from "react";
import logo from "../assets/home/logo.png";
import tarazoImg from "../assets/login/tarazo.png";
import { Link } from "react-router-dom";
const Signup = () => {
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
          <p className="text-2xl">What Kind of account do you want to create</p>
          <p>This is an important decision choose wisely</p>
          <div className="flex justify-between gap-10">
            <Link to="/client_signup">
              <div className="w-50 h-50 border-1 rounded-2xl px-10 py-4 flex flex-col items-center justify-center">
                <img src="" alt="img" />
                <p>Client Account</p>
                <p className="text-[12px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                </p>
              </div>
            </Link>
            <div className="w-50 h-50 border-1 rounded-2xl px-10 py-4 flex flex-col items-center justify-center">
              <img src="" alt="img" />
              <p>Lawyer Account</p>
              <p className="text-[12px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              </p>
            </div>
          </div>
          <p>
            Already Have an account -
            <Link to="/login">
              <span className="ml-1 text-blue-400">login</span>
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

export default Signup;
