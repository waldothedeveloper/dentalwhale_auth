import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        justifyContent: "center"
      }}
    >
      <h1>Welcome page</h1>
      <p>Login if you have an account</p>
      <Link to='/login'>
        <button>Login</button>
      </Link>
      <p>Don't have an account? Sign up</p>
      <Link to='/sign-up'>
        <button>Sign up</button>
      </Link>
    </div>
  );
}
