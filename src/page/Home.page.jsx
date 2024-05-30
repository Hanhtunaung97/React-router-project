import React from "react";
import useFetch from "../hook/useFetch";
import { getBookUrl } from "../service/booksUrl.service";
import Loading from "../Loading";
import BookListComponents from "../components/BookList.components";

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
            <div>
              {data.map((el) => (
                <BookListComponents key={el.id} data={el} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
