import { useEffect, useState } from "react";

function Timer(params) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("Screen Rendered");
    {
      delay1();
    }
  }, [count]);

  function delay1(params) {
    if (count > 10) return setCount(1);
  }

  function renderfunction(params) {
    return (
      <>
        {setCount((previousval) => {
          return previousval + 1;
        })}
      </>
    );
  }

  return (
    <>
      <h1>You have rendered screen {count} time</h1>
      <button onClick={renderfunction}> Render the screen</button>
    </>
  );
}
export default Timer;
