import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-end">
      <nav className="opacity-100 z-10 absolute">
        <a className="mr-4 text-white underline" href="">
          01. History
        </a>
        <a className="mr-48 text-white underline" href="">
          02. Team
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
