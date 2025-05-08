import React, { useState } from "react";
import logo from "../../assets/home/logo.png";
import gear from "../../assets/Client/Gear.png";
import Vector from "../../assets/Client/Vector.png";
import pfp from "../../assets/Client/pfp.jpg";
import { Link } from "react-router-dom";
import Messages from "./Messages";
const Transactions = () => {
  let active = "transaction";
  let array_transaction = [
    {
      img: pfp,
      name: "Danish",
      type: "CivilCriminal",
      Price: "4000",
      Timing: "16:04",
    },
    {
      img: pfp,
      name: "Danish",
      type: "CivilCriminal",
      Price: "4000",
      Timing: "16:04",
    },
    {
      img: pfp,
      name: "Danish",
      type: "CivilCriminal",
      Price: "4000",
      Timing: "16:04",
    },
    {
      img: pfp,
      name: "Danish",
      type: "CivilCriminal",
      Price: "4000",
      Timing: "16:04",
    },
  ];
  return (
    <div className="">
      {/* HEADER */}
      <div className="flex justify-between mx-20 mt-6">
        <img src={logo} alt="" className="w-[219px] h-[57px]" />
        <div className="flex justify-between gap-4 items-center">
          <img src={Vector} className="w-5 h-5" alt="" />
          <img src={gear} className="w-5 h-5" alt="" />
          <div className="flex justify-between gap-1.5">
            <img src={pfp} className="w-7 h-7 rounded-4xl" alt="" />
            <p className="text-neutral-600 font-semibold">Sajid Saleem</p>
          </div>
        </div>
      </div>
      <hr className="mt-4 text-neutral-200 border-1" />
      {/* MAIN */}
      <div className="flex">
        {/* SIDEBAR */}
        <div className="flex flex-col w-[20%] border-r-1 border-r-neutral-200 h-screen items-center py-5 gap-1">
          <Link
            to="/categories"
            className={`flex gap-3 items-center border-1  border-neutral-200  pr-26 pl-5 py-2 rounded-xl w-4/5 ${
              active === "home" ? "bg-blue-400 text-white" : ""
            }`}
          >
            <img src={gear} className="w-5 h-5 text-white" alt="" />
            <button>Home</button>
          </Link>
          <Link
            to="/messages"
            className={`flex gap-3 items-center border-1  border-neutral-200  pr-26 pl-5 py-2 rounded-xl w-4/5 ${
              active === "messages" ? "bg-blue-400 text-white" : ""
            }`}
          >
            <img src={gear} className="w-5 h-5" alt="" />
            <button>Messages</button>
          </Link>

          <Link
            to="/appointments"
            className={`flex gap-3 items-center border-1  border-neutral-200  pr-26 pl-5 py-2 rounded-xl w-4/5 ${
              active === "appointments" ? "bg-blue-400 text-white" : ""
            }`}
          >
            <img src={gear} className="w-5 h-5" alt="" />
            <button>Appointments</button>
          </Link>
          <Link
            to="/transaction"
            className={`flex gap-3 items-center border-1  border-neutral-200  pr-26 pl-5 py-2 rounded-xl w-4/5 ${
              active === "transaction" ? "bg-blue-400 text-white" : ""
            }`}
          >
            <img src={gear} className="w-5 h-5" alt="" />
            <button>Transactions</button>
          </Link>
          <Link
            to="/profile"
            className={`flex gap-3 items-center border-1 border-neutral-200 pr-26 pl-5 py-2 rounded-xl w-4/5 ${
              active === "profile" ? "bg-blue-400 text-white" : ""
            }`}
          >
            <img src={gear} className="w-5 h-5" alt="" />
            <button>Profile</button>
          </Link>
          <div className="flex flex-col justify-center items-center bg-blue-400 w-4/5 rounded-2xl px-6 py-6 text-white mt-14">
            <p className="font-semibold">Help Center</p>
            <p className="mt-2 text-[13px]">Contact us for More </p>
            <p className="text-[13px]">Questions</p>
            <button className="bg-white text-blue-400 px-2 py-2 rounded-xl mt-2 font-semibold w-full text-[13px] cursor-alias">
              Go To Help Center
            </button>
          </div>
          <button className=" bg-blue-400 text-white w-4/5  px-2 py-2 rounded-xl mt-8 cursor-pointer">
            Logout
          </button>
        </div>
        {/* ACTION */}
        <div className="w-[80%] px-10 py-10">
          <p className="text-2xl font-semibold">Appointments</p>
          {/* Container Below Welcome Text */}
          <div className="border-1 border-neutral-200 rounded-2xl py-10 px-10 mt-10">
            {/* Type and Search Button Div  */}
            <div className="flex justify-between mb-5">
              <p className="text-xl">Civil Lawyers</p>
              <input
                className="border-1 border-neutral-200 rounded-xl px-6 py-2"
                type="search"
                name=""
                placeholder="Search for Category"
                id=""
              />
            </div>
            {/* Display of list of Lwyers Div */}
            <div className="flex gap-5 flex-col">
              {array_transaction.map((element, index) => (
                <div
                  className="flex w-3/4 h-15 border-1 border-neutral-200 rounded-2xl px-5 py-7 items-center gap-1"
                  key={index}
                >
                  <img
                    className="w-12 h-12 rounded-[500px]"
                    src={element.img}
                    alt="lawyers Pfp"
                    srcset=""
                  />
                  <div className="ml-4">
                    <p className="font-semibold">{element.name}</p>
                    <p className="text-[13px] font-semibold text-blue-300">
                      {element.type}
                    </p>
                  </div>
                  {/* Price "4000" , Timing:"16:04"ars div */}
                  <div className="ml-12">
                    <p>Price</p>
                    <p className="text-[13px] font-semibold text-blue-300">
                      {element.Price}
                    </p>
                  </div>
                  <div className="ml-12">
                    <p>Timing</p>
                    <p className="text-[13px] font-semibold text-blue-300">
                      {element.Timing}
                    </p>
                  </div>
                  <button className="px-10 text-[14px] font-semibold py-2 bg-blue-400 border-0 rounded-3xl text-white cursor-pointer ml-12">
                    Pending
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
