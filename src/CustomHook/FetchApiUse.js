import React, { useEffect, useState } from "react";
import useFetch from "./FetchApi";
export const FetchApiUse = () => {
  const [data1, setData1] = useState([]);
  const { data, extractDataFromApi } = useFetch();
  useEffect(() => {
    extractDataFromApi("https://jsonplaceholder.typicode.com/todos");
  }, []);
  const fetchData = () => {
    setData1(data.splice(1, 4));
  };
  return (
    <div>
      <h2 style={{ marginLeft: "43%" }}>Custom Hook</h2>
      <button className="Submitbutton" onClick={fetchData}>
        FetchData
      </button>
      <div className="Data">
        {data1.map((item) => (
          <>
            <h3>{item.title}</h3>
          </>
        ))}
      </div>
      <hr />
    </div>
  );
};
