import React from "react";
import Image from "next/image";

const Survey = () => {
  return (
    <div className="container pt-40 mb-11">
      <div className="grid lg:grid-cols-[50%,1fr] gap-10">
        <Image
          className="w-[100%] h-auto lg:w-auto lg:h-[90vh] hover:scale-[1.03] cursor-pointer ease-linear duration-[0.3s] hover:shadow-2xl shadow-gray-950"
          src={"/survey2.jpg"}
          width={900}
          height={600}
          alt="survey img"
        />

        <div className="self-center">
          <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            About our <span className="text-accent">Food</span>
          </h2>

          <p className="text-gray-700 pt-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            accusantium laboriosam iure perspiciatis reprehenderit non, ratione
            sit fugiat. Saepe deserunt porro debitis odio excepturi molestiae
            ipsam dolorum sapiente repellendus accusantium!
          </p>

          <p className="text-gray-700 pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            dolorum fuga rem obcaecati est? Totam, perspiciatis mollitia ex, ad
            vel omnis saepe neque recusandae molestias, laboriosam magnam
            explicabo dolores voluptate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
