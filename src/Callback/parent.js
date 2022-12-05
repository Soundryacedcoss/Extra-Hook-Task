import React, { useCallback, useState } from "react";
import { Componant1 } from "./Componant1";
export const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [decrease, setDecrease] = useState(0);
  const ParentHandler = () => {
    setCounter(parseInt(counter) + 1);
  };
  const Comp1Handler = useCallback(() => {
    setDecrease(parseInt(decrease) - 1);
  }, [decrease]);

  return (
    <div>
      <button
        className="Submitbutton"
        onClick={ParentHandler}
        style={{ marginLeft: "43%" }}
      >
        Parent
      </button>
      <br />
      <p style={{ marginLeft: "47%" }}>{counter}</p>
      <Componant1 method={Comp1Handler} stateValue={decrease} />
    </div>
  );
};
