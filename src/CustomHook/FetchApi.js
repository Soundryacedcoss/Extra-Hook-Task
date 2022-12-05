import { useEffect, useState } from 'react'
const useFetchApi = (url) => {
    const[data,setData]=useState(null)
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((val)=>setData(val))
    },[url]);
  return [data]
};
export default useFetchApi
