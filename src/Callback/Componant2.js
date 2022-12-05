import React from "react";
export const Componant2 = ({ increse, value }) => {
  return (
    <div>
      <button
        className="Submitbutton"
        style={{ marginLeft: "45%" }}
        onClick={increse}
      >
        C2
      </button>
      <p style={{ marginLeft: "47%" }}>{value}</p>
    </div>
  );
};
