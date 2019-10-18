import React from "react";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div>
      <h1>Welcome to your account</h1>
      <Link to='/'>
        <button>Sign out</button>
      </Link>
    </div>
  );
}
