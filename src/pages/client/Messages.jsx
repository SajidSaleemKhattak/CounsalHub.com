import React, { useState } from "react";
import logo from "../../assets/home/logo.png";
import gear from "../../assets/Client/Gear.png";
import Vector from "../../assets/Client/Vector.png";
import pfp from "../../assets/Client/pfp.jpg";
import { Link } from "react-router-dom";
const Messages = () => {
  let [active, setActive] = useState(false);
  let array_Lawyers = [
    { img: pfp, name: "Danish", type: "CivilCriminal", rating: 4 },
    { img: pfp, name: "Danish", type: "CivilCriminal", rating: 4 },
    { img: pfp, name: "Danish", type: "CivilCriminal", rating: 4 },
    { img: pfp, name: "Danish", type: "CivilCriminal", rating: 4 },
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
          <div className="flex gap-3 items-center border-1 pr-26 pl-5 py-2 rounded-xl bg-blue-400 text-white w-4/5">
            <img src={gear} className="w-5 h-5 text-white" alt="" />
            <button>Home</button>
          </div>
          <div
            onClick={() => setActive(true)}
            className="flex gap-3 items-center border-1 pr-26 pl-5 py-2 rounded-xl bg-blue-400 text-white w-4/5"
          >
            <img src={gear} className="w-5 h-5" alt="" />
            <Link to="/messages">
              <button>Messages</button>
            </Link>
          </div>

          <div className="flex gap-3 items-center border-1 pr-26 pl-5 py-2 rounded-xl bg-blue-400 text-white w-4/5 ">
            <img src={gear} className="w-5 h-5" alt="" />
            <Link to="/appointments">
              <button>Appointments</button>
            </Link>
          </div>
          <div className="flex gap-3 items-center border-1 pr-26 pl-5 py-2 rounded-xl bg-blue-400 text-white w-4/5 ">
            <img src={gear} className="w-5 h-5" alt="" />
            <Link to="/transaction">
              <button>Transactions</button>
            </Link>
          </div>
          <div className="flex gap-3 items-center border-1 pr-26 pl-5 py-2 rounded-xl bg-blue-400 text-white w-4/5">
            <img src={gear} className="w-5 h-5" alt="" />
            <Link to="/profile">
              <button>Profile</button>
            </Link>
          </div>
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
        <div className="w-[80%] px-10 py-10 flex">
          <div className="w-2/5 bg-amber-700">sss</div>
          <div className="w-3/5 bg-teal-400">s</div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
