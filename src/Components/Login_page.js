// LoginPage.js

import { useState } from "react";
import "./Login_page.css";

export default function LoginPage() {
	 const [status,newstatus] = useState("")
	 const [username, newusername] = useState("");
	 const [password,newpassword] = useState("")

	 function funcCall(params) {
		if(username == "abhishek" && password == "23022002"){
			newstatus("LoginSuccessfull")
		}else{
			newstatus("Incorrect Cred");
		}
					
	 }
  return (
    <div className="login-container">
      <h1>Login Page</h1>

      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          onChange={(e) => newusername(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={(e) => newpassword(e.target.value)}
        />
      </div>

      <button onClick={funcCall}>Login</button>
	  <h1>{status}</h1>
    </div>
  );
}
