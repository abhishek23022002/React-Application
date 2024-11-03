import Car from "../index";

function LoginCredtionals(params) {
  /*  let login = "Champion" */
  let login1 = ["Champion", "Warrier"];
  let i = 0;
  return (
    <>
      <h1>"This page is used for login credentials</h1>
      <ul>
        {/*         {login1.map((value)=>
            <li key = {++i}>
                <h1>I will be {value} one day</h1>
            </li>
        )}   */}
        {/* {login1.map((value1,index)=>{<li key={index}><Car  login = {value1}/></li>})}  */}
        {login1.map((value, index) => (
          <li key={index}>
            {login1 !== undefined ? <Car login={value} /> : null}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default LoginCredtionals;
