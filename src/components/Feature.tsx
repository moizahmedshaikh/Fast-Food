import React from "react";
import Dash from "./Dash";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="container pt-10 sm:pt-40 ">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold">
        Featured <span className="text-accent">Food</span>
      </h2>

      <p className=" max-w-[550px] pt-10 text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iste hic
        qui cumque deleniti, esse veniam, nam assumenda, consequatur veritatis
        impedit expedita vel sapiente officia doloremque? Exercitationem
        adipisci quos sapiente delectus perferendis deserunt.
      </p>
      <Dash />

      <div className=" grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">

        <div className="w-fit rounded-xl mx-auto self-end hover:scale-105 hover:cursor-pointer duration-[0.3s] ease-linear hover:shadow-2xl shadow-gray-950">
          <Image
            className="w-[100%] rounded-xl max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid1.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl px-3">Spicy Burger</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px] px-3 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>

        <div className=" w-fit mx-auto rounded-xl hover:scale-110 duration-[0.3s] ease-linear  hover:cursor-pointer  hover:shadow-2xl shadow-gray-950 ">
          <Image
            className="w-[100%] rounded-xl max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid2.jpg"
            width={500}
            height={900}
            alt="grid image"
          />
          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl px-3"> Sushi</h2>
            <p className="text-gray-700 text-[14px] px-3 py-3 xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>

        <div className="w-fit rounded-xl mx-auto self-end hover:scale-105 hover:cursor-pointer duration-[0.3s] ease-linear hover:shadow-2xl shadow-gray-950">
          <Image
            className=" rounded-xl w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid3.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl px-3">Chesse Pizza</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px] px-3 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
