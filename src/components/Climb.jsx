import React from "react";
import pic3 from "../assets/pic3.jpg";

const Climb = () => {
  return (
    <div id="climb" className="relative flex flex-row h-screen">
      <h1 className="ml-48 mt-10 text-gray-400 text-9xl">
        02.{" "}
        <span className="inline text-blue-900 text-3xl absolute mt-14">
          Climb
        </span>
      </h1>
      <div className="ml-24 mt-20">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed
          dolore odio distinctio accusantium quod beatae, reprehenderit alias.
          Recusandae, id.
        </p>
      </div>
      <nav className="bg-gray-900 w-full h-[50px] absolute mt-44">
        <div className="mt-2">
          <a
            className="text-gray-200 ml-48 text-2xl hover:bg-gray-200 hover:text-gray-900 hover:underline hover:p-2.5"
            href="#climb"
          >
            MOUNTAIN 1
          </a>
          <a
            className="text-gray-200 pl-4 text-2xl hover:bg-gray-200 hover:text-gray-900 hover:underline hover:p-2.5"
            href="#climb"
          >
            MOUNTAIN 2
          </a>
        </div>
      </nav>
      <img
        className="absolute w-full mt-48 pt-8 h-[82%]"
        src={pic3}
        alt="mountain pic"
      />
      <div className="absolute inset-0 flex flex-col items-center justify center mt-48 pt-44 mr-48 pr-40">
        <div className="bg-white opacity-70 h-[250px] w-[400px]">
          <h2 className="text-4xl text-blue-900 font-bold px-6 py-4">
            SCHEDULE
          </h2>
          <p className="pl-6">
            25 Nov 2016 <span className="pl-16 ml-8">Janky Ass Work</span>
          </p>
          <p className="pl-6 pb-6">
            28 Nov 2016 <span className="pl-16 ml-8">Janky Ass Work</span>
          </p>
          <p className="pl-6 pb-6">
            18 Dec 2016 <span className="pl-16 ml-8">Janky Ass Work</span>
          </p>
          <p className="pl-7">
            7 Jan 2017 <span className="pl-16 ml-11">Janky Ass Work</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Climb;
