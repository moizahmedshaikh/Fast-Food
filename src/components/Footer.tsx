import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container pt-20 bg-[#19191b] text-white max-w-[1280px]">
      <div className="grid md:grid-cols-3 gap-20 mb-9">
        <div className="space-y-4">
          <h2 className="text-xl font-bold ">About US</h2>
          <p className="leading-[1.8]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
            reprehenderit tempora porro doloremque quod, maiores odit hic est
            laborum ipsam libero dignissimos, nemo enim numquam.
          </p>
        </div>

        <div className="space-y-4 mb-9">
          <h2 className="text-xl font-bold">The Restaurant</h2>
          <ul className="space-y-2">
            <li className="hover:underline hover:opacity-70 hover:cursor-pointer">
              About us
            </li>
            <li className="hover:underline hover:opacity-70 hover:cursor-pointer">
              Chefs
            </li>
            <li className="hover:underline hover:opacity-70 hover:cursor-pointer">
              Events
            </li>
            <li className="hover:underline hover:opacity-70 hover:cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        <div className="mb-9">
          <div className="flex gap-8 text-white text-2xl items-center sm:pt-16">
            <Link href={""}>
              <FaFacebook
                size={30}
                id="profile-icon"
                className="text-blue-900 bg-white rounded-full"
              />
            </Link>
            <FaTwitter
              size={30}
              id="profile-icon"
              className="text-blue-600 bg-white rounded-full"
            />
            <Link href={""}>
              <FaLinkedin
                size={30}
                id="profile-icon"
                className="text-blue-600 bg-white rounded-full"
              />
            </Link>

            <Link href={""}>
              <FaGithub
                size={30}
                id="profile-icon"
                className="text-gray-600 bg-white rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[100%] pb-4">
        <p className="text-white text-[16px] text-center  ">
          &copy; Copyright 2024 All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
