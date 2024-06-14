import React from "react";
import { Link } from "react-router-dom";

const NavComponents = () => {
  return (
    <nav className="flex justify-between items-center mb-0 md:mb-5">
      <h1 className=" text-violet-700 font-bold">LOGO</h1>
      <div>
        <ul className=" flex gap-5 items-center font-normal text-violet-500 ">
          <Link to={"/"}>
            <li className="hover:font-semibold hover:text-violet-700 duration-200 active:text-violet-700 active:scale-75">
              Home
            </li>
          </Link>

          <Link to={"/dashboard"}>
            <li className="hover:font-semibold hover:text-violet-700 duration-200 active:text-violet-700 active:scale-75">
              DashBoard
            </li>
          </Link>
          <Link to={"/admin"}>
            <li className="hover:font-semibold hover:text-violet-700 duration-200 active:text-violet-700 active:scale-75">
              Admin
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavComponents;
