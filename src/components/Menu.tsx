import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";
import { menuData } from "@/Data/data";



const Menu = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          <br />
          quidem esse eum animi?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 w-fit  mx-auto">
        <li className="bg-accent text-white p-1">Appetizers</li>
        <li id="icon" className="hover:cursor-pointer">Breakfast</li>
        <li id="icon" className="hover:cursor-pointer">Salads</li>
        <li id="icon" className="hover:cursor-pointer">Meat & Fish</li>
        <li id="icon" className="hover:cursor-pointer">Soup</li>
        <li id="icon" className="hover:cursor-pointer">Desert</li>
        <li id="icon" className="hover:cursor-pointer">Drinks</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src={"/menu_left.png"}
            width={500}
            height={500}
            alt={"dish"}
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4 ">
          {menuData.map((items, index) => (
            <MenuCard
             key={index} 
             img={items.img}
             title={items.title}
             desc={items.desc}
             price={items.price}
             />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
