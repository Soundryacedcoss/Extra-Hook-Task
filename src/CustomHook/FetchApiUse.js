import React, { useState } from 'react'
import  useFetchApi  from './FetchApi';
export const FetchApiUse = () => {
   const[data1,setData1]=useState([])
    const [data] = useFetchApi("https://jsonplaceholder.typicode.com/todos");
    const fetchData=()=>{
      setData1(data.splice(1,4))
       console.log(data1);
    }
  return (
    <div>
      <h2 style={{marginLeft:"43%"}}>Custom Hook</h2>
        <button className="Submitbutton" onClick={fetchData}>FetchData</button>
      <div className='Data'>
      {
          data1.map((item)=><><h3>{item.title}</h3></>)
        }
        </div>  
        <hr />
    </div>
    
  )
}
