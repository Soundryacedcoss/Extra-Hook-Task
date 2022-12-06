import { useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  function extractDataFromApi(url) {
    fetch(url)
      .then((res) => res.json())
      .then((val) => setData(val));
  }
  return { data, extractDataFromApi };
};
export default useFetch;
