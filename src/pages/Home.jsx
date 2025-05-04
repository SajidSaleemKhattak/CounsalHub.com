import React from "react";
import logo from "../assets/home/logo.png";
import manImg from "../assets/home/man.png";
import swooshImg from "../assets/home/swoosh.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="px-15 pt-10">
      {/* HEADER */}
      <div className="flex justify-between">
        <img src={logo} className="w-[219px] h-[57px]" alt="" />
        <div className="flex justify-between items-center w-2/10">
          <Link to="/signup">
            <button className="px-6 py-1.5 border-1 rounded-3xl">
              Sign up
            </button>
          </Link>
          <Link to="/login">
            <button className="px-8 py-2 bg-blue-400 border-0 rounded-3xl text-white">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div>
        <div className="grid grid-cols-2 gap-5 relative h-[80vh] mt-10 ">
          <div className="flex flex-col pt-10 justify-center items-baseline gap-8">
            <p className="text-6xl text-blue-400 ">
              Elevate Your Legal Strategy Partner To Consult
            </p>
            <p className="text-2xl">
              We are here to help you take care of your legality with the best
              service especially for you.{" "}
            </p>
            <button className="px-8 py-2 bg-blue-400 border-0 rounded-3xl text-white">
              Start Legal Consultation
            </button>
          </div>
          <div>
            <img
              className="absolute w-[444px] h-[555px] top-0 right-0 z-10"
              src={manImg}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* HERO SECtION 2 */}
      <div className="grid grid-cols-2">
        <div className="bg-amber-400">
          <p>Trust Your Future and Peaceful Life</p>
          <p>
            No more haggling over schedules or grappling with travel. With
            CounsalHub Audio & Video Consultation, you access a roster of
            experienced lawyers right at your convenience. Simply select a legal
            expert, choose from the available time slots, and voila, you’re
            booked. Save time, reduce stress, and get online legal information
            and advice
          </p>
        </div>
        <div className="bg-violet-400">
          <p>Immigration</p>
          <p>Property</p>
          <p>Matrimonial</p>
          <p>Personal</p>
        </div>
      </div>
      {/* HERO SECTION 3 */}
      <div className="bg-green-400 flex justify-between mt-10">
        <div>
          <p>Our Achivements</p>
          <p>See How far have we come</p>
        </div>
        <div>
          <p>70+ </p>
          <p>cities covered</p>
        </div>
        <div>
          <p>20k+ </p>
          <p>Cases Solved </p>
        </div>
        <div>
          <p>150+ </p>
          <p> Active Lawyers</p>
        </div>
      </div>

      {/* HERO SECTION 4 */}
      <div className="bg-violet-200 mt-10 flex flex-col items-center">
        <p>Experiance a smarter</p>
        <p>Legal Platform in your hand</p>
        <div className="bg-lime-400 mt-5 grid grid-cols-3 gap-10">
          <div className="bg-amber-200">
            <img src="" alt="img" />
            <p>Immigration Assistance</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim
              ex magnam inventore quis ea sapiente natus repudiandae ratione
              iure.
            </p>
          </div>{" "}
          <div>
            <img src="" alt="img" />
            <p>Immigration Assistance</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim
              ex magnam inventore quis ea sapiente natus repudiandae ratione
              iure.
            </p>
          </div>{" "}
          <div>
            <img src="" alt="img" />
            <p>Immigration Assistance</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim
              ex magnam inventore quis ea sapiente natus repudiandae ratione
              iure.
            </p>
          </div>{" "}
          <div>
            <img src="" alt="img" />
            <p>Immigration Assistance</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim
              ex magnam inventore quis ea sapiente natus repudiandae ratione
              iure.
            </p>
          </div>{" "}
          <div>
            <img src="" alt="img" />
            <p>Immigration Assistance</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim
              ex magnam inventore quis ea sapiente natus repudiandae ratione
              iure.
            </p>
          </div>{" "}
          <div>
            <img src="" alt="img" />
            <p>Immigration Assistance</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim
              ex magnam inventore quis ea sapiente natus repudiandae ratione
              iure.
            </p>
          </div>
        </div>
        <button className="px-8 py-2 bg-blue-400 border-0 rounded-3xl text-white mt-10 mb-10">
          Talk to Lawyer
        </button>
      </div>
    </div>
  );
};

export default Home;
