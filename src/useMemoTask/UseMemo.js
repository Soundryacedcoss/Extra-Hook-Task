import React, { useState, useMemo } from "react";
export const UseMemo = () => {
  const [Input1, setInput1] = useState("");
  const [inpput2, setInput2] = useState("");
  const [sum, setSum] = useState(0);
  let num1 = 10;
  let num2 = 10;
  const calculation = useMemo(() => {
    console.log('calculation');
    return num1 * num2;
  }, []);
  const Input1Handler = (e) => {
    setInput1(e.target.value);
  };
  const Input2Handler = (e) => {
    setInput2(e.target.value);
  };
  const AddHandler = () => {
    if(Input1==="" && inpput2===""){
      alert("please enter any number")
    }
    else if( Input1===""){
      alert("Enter first number")
    }
    else if(inpput2===""){
      alert("Enter second number")
    }
    else{
      setSum(parseInt(Input1) + parseInt(inpput2));
    }
  };
  return (
    <div className="MemoPage">
       <h2 style={{marginLeft:"43%"}}>UseMemo Hook</h2>
      <input className="INput" value={Input1} type="number" onChange={Input1Handler} placeholder="Enter a number" />
      <br />
      <input className="INput" value={inpput2} type="number" onChange={Input2Handler} placeholder="Enter a number" />
      <br />
      <button className="Submitbutton" onClick={AddHandler}>
        Add
      </button>
      <p style={{marginLeft:"46%",fontSize:"20px"}}>{sum}</p>
      <hr />
    </div>
  );
};
