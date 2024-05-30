import React from "react";

const NavComponents = () => {
  return (
    <nav className="flex justify-between items-center mb-0 md:mb-5">
      <h1 className=" text-violet-700 font-bold">LOGO</h1>
      <div>
        <ul className=" flex gap-5 items-center font-normal text-violet-500 ">
          <li className="hover:font-semibold hover:text-violet-700">Home</li>
          <li className="hover:font-semibold hover:text-violet-700">Books</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavComponents;
