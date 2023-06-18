import React from "react";
import pic2 from "../assets/pic2.jpg";
import Carousel from "./Carousel.jsx";

const History = () => {
  return (
    <div className="relative">
      <nav className="flex justify-between">
        <div className="flex">
          <a className="my-6 ml-48" href="">
            LOS ANGELES
            <br /> MOUNTAINS
          </a>
        </div>
        <div className="flex">
          <a className="mr-4 my-6 underline" href="">
            01. History
          </a>
          <a className="mr-48 my-6 underline" href="">
            02. Team
          </a>
        </div>
      </nav>
      <div className="relative">
        <h1 className="absolute ml-48 mt-10 text-gray-400 text-9xl">
          01.{" "}
          <span className="inline text-blue-900 text-3xl absolute mt-14">
            History
          </span>
        </h1>
        <div className="absolute top-48 text-center mx-48">
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            consectetur error minima amet expedita corporis harum delectus,
            nostrum tempora vel quaerat repellendus ut quam recusandae,
            voluptatibus aliquid perferendis placeat dolor obcaecati dolore
            minus enim. Inventore nesciunt deleniti vel reprehenderit explicabo.
          </p>
        </div>
        <img
          className="w-full h-screen object-cover"
          src={pic2}
          alt="background image"
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <Carousel />
      </div>
    </div>
  );
};

export default History;
