"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {

  const [isMenu,setMenu] = useState(false);

  function toggle (){
    setMenu(!isMenu)
  }

  useEffect(()=>{
    const sidebar = document.querySelector(".nav2")as HTMLElement;
    
    if(sidebar){
      if(isMenu){
        sidebar.style.display = "block"
      }else{
        sidebar.style.display = "none"
      
      }

    }

  },[isMenu])

  return (
    <div className="container z-50 max-w-[1280px] py-2 px-6 fixed top-0 w-[100vw] bg-[#19191b] text-white ">
      {/* Nav1 for Computer  */}
      <div className="flex justify-between items-center w-[100%] ">
        <Image src={"/logo2.png"} width={70} height={70} alt={"logo"}/>
        <ul className="md:flex hidden gap-10 items-center font-[700] text-[15px]">
          <li >
            <Link id="icon" href={"/"}>Home</Link>
          </li>
          <li>
            <Link id="icon"  href={"/about"}>About</Link>
          </li>
          <li>
            <Link id="icon" href={"/service"}>Service</Link>
          </li>
          <li>
            <Link id="icon"  href={"/menu"}>Menu</Link>
          </li>
          <li>
            <Link id="icon"  href={"/contact"}>Contact</Link>
          </li>
          <button className="bg-red-500 hover:opacity-70  text-white px-6 font-normal py-1 rounded-3xl">
            Sign up
          </button>
        </ul>
        {/* Menu Icon */}
        <IoMdMenu onClick={toggle} className="menu-btn md:hidden text-accent font-[900]" size={40} />
      </div>

      {/* Nav 2  */}
      <div className={`nav2 md:hidden fixed top-[65px]  right-0 w-full h-screen backdrop-blur-[20px] bg-[#19191b] text-white font-bold z-10 transition-transform duration-500 ease-in-out transform ${
          isMenu ? "translate-x-0" : "translate-x-full"
        }`} >
        <ul className="z-10 flex md:hidden flex-col items-center mt-9 justify-center text-xl gap-y-8">
          <li>
            <Link id="icon" href={"/"}>Home</Link>
          </li>
          <li>
            <Link id="icon" href={"/about"}>About</Link>
          </li>
          <li>
            <Link id="icon"  href={"/service"}>Service</Link>
          </li>
          <li>
            <Link id="icon"  href={"/menu"}>Menu</Link>
          </li>
          <li>
            <Link id="icon"  href={"/contact"}>Contact</Link>
          </li>
          <button  className="bg-red-500 hover:bg-[#745656] text-white px-20 py-2 font-normal  rounded-3xl">
            Sign up
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
