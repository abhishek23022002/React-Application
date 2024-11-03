import { useState } from "react";

function Hellow(params) {
  let [color, setColor] = useState("red");
  return (
    <>
      <h1>The colour is {color}</h1>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        Click here to change colour{" "}
      </button>
    </>
  );
}
export default Hellow;
