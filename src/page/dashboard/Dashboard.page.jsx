import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { state } = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("auth");
    !data && nav("/admin");
  }, []);
  return (
    <div>
      <div className=" grid grid-cols-10 min-h-screen ">
        <div className=" col-span-2 border border-violet-300 p-3 rounded-lg ">
          <ul className=" text-center">
            <h1 className=" font-bold text-violet-500">
              {state?.userData?.name}
            </h1>
            <Link to={"/dashboard"}>
              <li className=" p-1 border border-violet-200 rounded mb-3 duration-200 active:bg-violet-300 active:scale-75 active:text-violet-100 select-none cursor-pointer hover:bg-violet-300 hover:text-violet-100">
                DashBoard
              </li>
            </Link>
            <Link to={"/dashboard/blog"}>
              <li className=" p-1 border border-violet-200 rounded mb-3 duration-200 active:bg-violet-300 active:scale-75 active:text-violet-100 select-none cursor-pointer hover:bg-violet-300 hover:text-violet-100">
                Blog
              </li>
            </Link>

            <Link to={"/dashboard/user"}>
              <li className=" p-1 border border-violet-200 rounded mb-3 duration-200 active:bg-violet-300 active:scale-75 active:text-violet-100 select-none cursor-pointer hover:bg-violet-300 hover:text-violet-100">
                User
              </li>
            </Link>
          </ul>
        </div>
        <div className=" col-span-8 border border-violet-300 p-3 border-s-0 rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
