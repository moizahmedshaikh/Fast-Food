import React from "react";
import Image from "next/image";

interface propsType {
  img: string;
  title: string;
  desc: string;
}

const ServiceCard: React.FC<propsType> = ({ img, title, desc }) => {
  return (
    <div>
      <div className="space-y-3 text-center">
        <Image
          className="mx-auto"
          src={img}
          alt={title}
          width={70}
          height={70}
        />

        <div className="uppercase ">
          {title}
          <div className="flex gap-2 w-fit mx-auto mt-2">
            <div className="bg-accent h-[7px] w-[7px] rounded-full" />
            <div className="bg-accent h-[7px] w-[7px] rounded-full" />
            <div className="bg-accent h-[7px] w-[7px] rounded-full" />
          </div>
        </div>
        <p className="text-gray-700 text-[14px]">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
