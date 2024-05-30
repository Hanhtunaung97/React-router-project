import React from "react";
import useFetch from "../hook/useFetch";
import { getBookUrl } from "../service/booksUrl.service";
import Loading from "../Loading";
import BookListComponents from "../components/BookList.components";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data, error, loading } = useFetch(getBookUrl, "books");
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
                <Link key={el.id}>
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
