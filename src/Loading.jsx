import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen gap-y-5">
      <h1 className="text-3xl font-bold text-red-700 mb-0 lg:mb-3 flex justify-center items-center">
        Loading.....
        <span className=" inline-block p-2 w-3 h-3 border-4 border-violet-700 border-s-4 border-s-red-700 border-e-4 border-e-red-700 rounded-full animate-spin"></span>
      </h1>
      <img src="./public/loading.svg" width={300} alt="loading-image" />
    </div>
  );
};

export default Loading;
