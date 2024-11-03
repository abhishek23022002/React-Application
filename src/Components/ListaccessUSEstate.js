import { useState } from "react";

function Listss(params) {
  let [value1, setValue] = useState([]);
  let [count, setCount] = useState(1);
  function FuncCALL(params) {
    let Text = `Test` + count;
    setValue((prev) => {
      return [...prev, Text];
    });
    setCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <>
      <button onClick={FuncCALL}>Adding Elements</button>
      <ul>{value1.map((val, index) => [<li key={index}> {val}</li>])}</ul>
    </>
  );
}

export default Listss;
{
  /* <ul>
                {value1.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul> */
}
