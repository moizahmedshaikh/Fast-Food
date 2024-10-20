
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container text-[12px] text-[#cececc] sm:text-[19px]  max-w-[1280px] py-24 mx-auto bg-[#474343] "
    >
      <form>
        <div className="headings-section text-center">
          <h1 className=" text-[35px] sm:text-[44px] text-gray-100">Contact Us</h1>
          <h2 className=" mx-auto text-[20px] sm:text-[30px] pt-4  text-center text-gray-400">
            Get in touch with me!
          </h2>
        </div>

        <div className="pt-10  flex flex-col gap-y-3 items-center justify-center mx-auto">
          <div className="sm:w-[40%] pb-4">
            <label
              htmlFor="name"
              className="w-[100%]   text-[16px] sm:text-xl "
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="outline w-[100%] px-5 py-1 rounded-[5px] outline-none"
            />
          </div>
          <div className="sm:w-[40%] pb-4">
            <label htmlFor="name" className="w-[100%]  text-[16px] sm:text-xl ">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="outline w-[100%] px-5 py-1  rounded-[5px] outline-none"
            />
          </div>
          <div className="sm:w-[40%] pb-4">
            <label htmlFor="name" className="w-[100%]  text-[16px] sm:text-xl ">
              Message
            </label>
            <textarea
              rows={7}
              placeholder="Enter here..."
              className="outline w-[100%] px-4 py-1  rounded-[5px] outline-none"
            />
          </div>

          <div>
            <button className="rounded-[10px] hover:cursor-pointer text-white text-[20px] bg-[#19191b] px-8 py-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
