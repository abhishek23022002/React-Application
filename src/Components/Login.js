import Car from '../index'

function LoginCredtionals(params) {
   /*  let login = "Champion" */
    let login1 = ["Champion","Warrrier"]
    let i = 0 
    return(
       <><h1>"This page is used for login credentials</h1>
       <ul>
        {login1.map((value1,index)=><li key = {++i}><Car  login = {value1}/></li>)}
       </ul>
     {/*   {login !== undefined ? <Car login ={login}/> : null } */}
       
       </>
    )   
}

export default LoginCredtionals