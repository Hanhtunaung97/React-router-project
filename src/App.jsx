import React, { useEffect } from "react";
import { getBookUrl } from "./service/booksUrl.service";
import useFetch from "./hook/useFetch";

const App = () => {
  const { loading, error, data } = useFetch(getBookUrl, "books");
  console.log(data);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>{data ? <div>{JSON.stringify(data)}</div> : <h1>{error}</h1>}</>
      )}
    </div>
  );
};

export default App;
