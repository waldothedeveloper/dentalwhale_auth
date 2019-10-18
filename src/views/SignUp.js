import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
    >
      <h1>Sign up form</h1>
      <input type='text' placeholder='first name' />
      <input type='text' placeholder='last name' />
      <input type='text' placeholder='email' />
      <input type='text' placeholder='password' />
      <Link to='/account'>
        <button>Sign up</button>
      </Link>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  );
}
