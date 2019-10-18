import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { fakeAuth } from "../context/userContext";

// console.log("fakeAuth on Login:", fakeAuth.isAuthenticated);

export default function Login() {
  let history = useHistory();
  let location = useLocation("/login");
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
      <h1>Log in form</h1>
      <input type='text' placeholder='username' />
      <input type='text' placeholder='password' />

      <button onClick={loginUser}>Login</button>

      <p>Don't have an account? Sign up</p>
      <Link to='/sign-up'>
        <button>Sign up</button>
      </Link>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  );
}
