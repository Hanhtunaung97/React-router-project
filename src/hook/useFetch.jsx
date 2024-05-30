import { useEffect, useState } from "react";

 const useFetch = (fetchFun, arg) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    data: null,
  });
  useEffect(() => {
    (async () => {
      const data = await fetchFun(arg);
      try {
        setData((pre) => {
          return {
            loading: false,
            error: null,
            data: data,
          };
        });
      } catch (error) {
        setData((pre) => {
          return {
            loading: false,
            data: null,
            error: error.message,
          };
        });
      }
    })();
  }, []);
  return data;
};

export default useFetch;
