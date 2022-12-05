import React, { useCallback, useState } from "react";
import { Componant2 } from "./Componant2";
export const Componant1 = ({ method, stateValue }) => {
  const [Increse, setIncrease] = useState(0);
  const IncreseHAndler = useCallback(() => {
    // increasing by 5
    setIncrease(parseInt(Increse) + 5);
  }, [Increse]);
  return (
    <div>
      <button className="Submitbutton" onClick={method}>
        C1
      </button>
      <p style={{ marginLeft: "47%" }}>{stateValue}</p>
      <Componant2 increse={IncreseHAndler} value={Increse} />
    </div>
  );
};
