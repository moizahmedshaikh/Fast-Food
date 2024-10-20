import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="lg:w-[580px] xl:w-[620px] rounded-full h-auto absolute right-0 top-0 -z-10"
        src={"https://plus.unsplash.com/premium_photo-1695802289737-c4db04fad205?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        alt={"hero bg"}
        width={1000}
        height={600}
      />
      <Navbar />

      <div className="container h-[calc(100vh-3px)]  sm:h-[calc(100vh-30px)] grid items-center">
        <div className="space-y-4 bg-[#ffffff98] w-fit p-4 ">
          <p className="font-medium uppercase ">Wide options of choice</p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Spicy Fast <span className="text-accent">Food</span>
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Delicious food color, aroma and taste. <br /> What are you waiting
            for?
          </p>

          <button className="bg-accent text-white px-6 py-2 rounded-3xl  text-[14px] sm:text-[16px]  hover:duration-[0.3s] ease-in hover:bg-[#3a3a35]">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
