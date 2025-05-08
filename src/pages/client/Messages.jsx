import React, { useState } from "react";
import logo from "../../assets/home/logo.png";
import gear from "../../assets/Client/Gear.png";
import Vector from "../../assets/Client/Vector.png";
import pfp from "../../assets/Client/pfp.jpg";
import { Link } from "react-router-dom";
const Messages = () => {
  let [data, setData] = useState("");
  let active = "messages";
  let messages_array = [
    { img: pfp, name: "Danish", message: "CivilCriminal", time: "4:09" },
    { img: pfp, name: "Danish", message: "CivilCriminal", time: "4:09" },
    { img: pfp, name: "Danish", message: "CivilCriminal", time: "4:09" },
    { img: pfp, name: "Danish", message: "CivilCriminal", time: "4:09" },
  ];
  let handleDataCollection = (e) => {
    console.log(e);
  };
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
        {/* border-r-2 border-r-neutral-200 border-t-2 border-t-neutral-200" */}
        <div className="w-[80%] px-10 py-10 flex">
          <div className="w-2/5 ">
            <p className="text-2xl font-semibold">Messages</p>
            <input
              type="text"
              className="border-1 rounded-xs border-neutral-200 px-6 py-1.5 mt-6"
              placeholder="Search For Messages"
            />
            <div className="mt-8 flex flex-col gap-4">
              {messages_array.map((item, index) => (
                <div
                  className="flex justify-between items-center w-3/4"
                  onClick={handleDataCollection}
                  key={index}
                >
                  <img
                    className="w-17 h-12 rounded-4xl object-center"
                    src={item.img}
                    alt=""
                  />
                  <div className="w-full pl-4">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-[13px] text-neutral-500">
                      {item.message}
                    </p>
                  </div>
                  <p className="text-neutral-500">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-3/5 border-2 border-neutral-200 flex flex-col">
            {/* <div className="flex justify-between items-center w-3/4">
              <img
                className="w-17 h-12 rounded-4xl object-center"
                src={item.img}
                alt=""
              />
              <div className="w-full pl-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-[13px] text-neutral-500">{item.message}</p>
              </div>
              <p className="text-neutral-500">{item.time}</p>
            </div> */}
            {/* <div className=" bg-teal-400"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
