import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route
  // Switch,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
const Welcome = React.lazy(() => import("./views/Welcome"));
const Account = React.lazy(() => import("./views/Account"));
const Login = React.lazy(() => import("./views/Login"));
const SignUp = React.lazy(() => import("./views/SignUp"));

// Schema of routes
//   / -> public route
//   /sign-in -> public route
//   /sign-up -> public route
//   /account -> PROTECTED route

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/account' component={Account} />
      </Suspense>
    </Router>
  );
}

export default App;
