import { useState } from "react";

function Formss(params) {
  const [text, settext] = useState("");
  /* console.log("Textt",text); */
  function funccall(params) {
    console.log("DAtaaa", text);
    params.preventDefault();
  }

  return (
    <>
      <form onSubmit={funccall}>
        <label>
          {" "}
          Enter the text{" "}
          <input
            type="text"
            onChange={(value) => {
              settext(value.target.value);
            }}
          />
        </label>

        <input type="submit" value="Submit Form" />
      </form>
    </>
  );
}

export default Formss;
