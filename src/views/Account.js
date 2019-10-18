import React from "react";
import { useHistory } from "react-router-dom";
import { fakeAuth } from "../context/userContext";
// console.log("fakeAuth on Account:", fakeAuth.isAuthenticated);

export default function Account() {
  let history = useHistory();
  return (
    <div>
      <p>{JSON.stringify(fakeAuth, null, 2)}</p>
      <h1>Welcome to your protected account</h1>
      <button onClick={() => fakeAuth.signout(() => history.push("/"))}>
        Sign out
      </button>
    </div>
  );
}
