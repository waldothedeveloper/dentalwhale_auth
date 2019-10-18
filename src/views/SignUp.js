import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { fakeAuth } from "../context/userContext";

export default function SignUp() {
  let history = useHistory();
  let location = useLocation("sign-up");
  let { from } = location.state || { from: { pathname: "/account" } };

  let loginUser = () => {
    console.log("this is running");
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
    >
      <h1>Sign up form</h1>

      <input type='text' placeholder='first name' />
      <input type='text' placeholder='last name' />
      <input type='text' placeholder='email' />
      <input type='text' placeholder='password' />
      <button onClick={loginUser}>Sign Up</button>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  );
}
