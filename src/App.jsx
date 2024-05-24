import React, { useEffect } from "react";
import { getBookUrl } from "./service/booksUrl.service";

const App = () => {
  useEffect(() => {
    (async () => {
      const {data} = await getBookUrl("books");
      console.log(data);
    })();
  }, []);
  return <div>App</div>;
};

export default App;
