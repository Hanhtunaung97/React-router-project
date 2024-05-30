import React from "react";

const BookListComponents = ({ data }) => {
  return (
    <div>
      <div className=" w-full border border-violet-300 rounded-none h-[550px] hover:scale-95 duration-200">
        <img
          src={data.image}
          className="h-3/5 object-top object-cover w-full"
          alt="novelsImage"
        />
        <div className=" p-3">
          <div className="mb-3">
            <h3 className=" text-xl font-semibold text-violet-700">{data.book}</h3>
            <h6 className=" text-sm text-violet-500">{data.author}</h6>
          </div>
          <div>
            <p className=" text-slate-700 font-bold">{data.slug}</p>
            <p className=" text-slate-500">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListComponents;
