import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
    >
      <h1>Log in form</h1>
      <input type='text' placeholder='username' />
      <input type='text' placeholder='password' />
      <Link to='/account'>
        <button>Login</button>
      </Link>
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
