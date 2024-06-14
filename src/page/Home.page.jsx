import React, { useContext } from "react";
import useFetch from "../hook/useFetch";
import { getBookUrl } from "../service/booksUrl.service";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { BookListComponents } from "../components";
import { apiContext } from "../store/ApiContextProvider";

const HomePage = () => {
  // const { data, error, loading } = useFetch(getBookUrl, "books");
  const {loading,error,data}=useContext(apiContext)
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
              {data.map((el) => (
                <Link key={el.id} to={`/detail/${el.slug}`}>
                  <BookListComponents data={el} />
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
