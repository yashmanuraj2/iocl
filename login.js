import React from 'react'
import { useContext, useRef ,useHistory} from "react";
import "./login.scss";
import { loginCall } from "../apiCalls"
import { AuthContext } from "../context/AuthContext";



export default function Login() {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);
   
  
    const handleClick = (e) => {
      e.preventDefault();
      loginCall(
        { email: email.current.value, password: password.current.value },
        dispatch
      );


      
    };

    return (


<div className="login">
	<div className="image"><img src="images/IOCL-Logo.jpg" alt=""/></div>
	<div className="details">
		<h1 className="title">Log in</h1>
		<div className="input"><label for="">Email
			</label>
			<input type="text" placeholder="Enter your email address" ref={email}/>
		</div>
		<div className="input">
			<label for="">Password
			</label><input type="password" placeholder="Enter your password" ref = {password}/>
		</div>
		<button className="login-button" onClick = {handleClick}>Log in</button>

	
	</div>
</div>
    )
}

