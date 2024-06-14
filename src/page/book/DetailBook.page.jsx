import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { getBookUrl } from "../../service/booksUrl.service";
import LoadingDetailBook from "../../LoadingDetailBook";
import { apiContext } from "../../store/ApiContextProvider";

const DetailBookPage = () => {
  const [item, setItem] = useState(null);
  const { slug } = useParams();
  const nav = useNavigate();
  const handleBackBtn = () => {
    nav(-1);
  };
  // const { loading, error, data } = useFetch(getBookUrl, `books/${id}`);
  const { loading, error, data } = useContext(apiContext);
  useEffect(() => {
    const finder = data?.find((el) => el.slug === slug);
    setItem(finder);
  }, [slug, data]);
  return (
    <div>
      {loading ? (
        <LoadingDetailBook />
      ) : (
        <>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <div>
              <button
                onClick={handleBackBtn}
                className="mb-3 px-3 py-1 border  rounded-lg border-violet-700 duration-200 active:scale-95 active:bg-violet-700 active:text-white hover:bg-violet-700 hover:text-white"
              >
                GO BACK
              </button>
              <div className=" w-full border border-violet-300 rounded-none min-h-screen hover:scale-95 duration-200">
                <img
                  src={item?.image}
                  className="h-3/5 object-top object-cover w-full"
                  alt="novelsImage"
                />
                <div className=" p-3">
                  <div className="mb-3">
                    <h3 className=" text-3xl font-semibold text-violet-700">
                      {item?.book}
                    </h3>
                    <h6 className="  text-violet-500">{item?.author}</h6>
                  </div>
                  <div>
                    <p className=" text-xl text-slate-700 font-bold">
                      {item?.slug}
                    </p>
                    <p className=" text-slate-500">{item?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
