import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./views/Welcome";
import PrivateRoute from "./components/PrivateRoute";
// const Welcome = React.lazy(() => import("./views/Welcome"));
// const Account = React.lazy(() => import("./views/Account"));
// const Login = React.lazy(() => import("./views/Login"));
// const SignUp = React.lazy(() => import("./views/SignUp"));

import Account from "./views/Account";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

// Schema of routes
//   / -> public route (this is sort of likethe home page)
//   /sign-in -> public route
//   /sign-up -> public route
//   /account -> PROTECTED route

function App() {
  return (
    <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}

      <Route exact path='/' component={Welcome} />
      <Route path='/login' component={Login} />
      <Route exact path='/sign-up' component={SignUp} />
      <PrivateRoute path='/account'>
        <Account />
      </PrivateRoute>

      {/* </Suspense> */}
    </Router>
  );
}

export default App;
