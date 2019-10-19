import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { fakeAuth } from "../context/userContext";

export default function useLoginForm(validate) {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/account" } };

  const [stateValues, setStateValues] = React.useState([]);
  const [localStorageValues, setlocalStorageValues] = React.useState(null);
  const [errors, setErrors] = React.useState({});
  const [openDialog, setOpenDialog] = React.useState(false);
  const [wrongAccount, setWrongAccount] = React.useState(false);

  let loginUser = () => {
    console.log("this is running");
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  //checking errors or invalid input
  React.useEffect(() => {
    if (Object.keys(stateValues).length > 0) {
      setErrors(validate(stateValues));
    }
    //eslint-disable-next-line
  }, [stateValues]);

  //Getting the info from the "SERVER" in this case LocalStorage
  React.useEffect(() => {
    if (localStorage.length > 0) {
      setlocalStorageValues(JSON.parse(localStorage.getItem("CachedUsers")));
    }
  }, []);

  const handleSubmit = event => {
    if (event) event.preventDefault();

    //if email and password is blank, yell to user
    if (stateValues.length === 0) {
      setErrors(validate(stateValues));
    }

    //! validate against server...in this case is LocalStorage
    if (localStorageValues !== null) {
      let validEmail = false;
      let validPassword = false;

      localStorageValues.map(user => {
        if (stateValues.email && user.email !== stateValues.email) {
          console.log("email account does not exist");
          setWrongAccount(true)
        } else {
          validEmail = true;
        }

        if (user.password !== stateValues.password) {
          console.log("password is incorrect, try again");
        } else {
          validPassword = true;
        }
      });

      if (validEmail && validPassword) {
        setWrongAccount(false)
        loginUser();
      }
    }
    if (
      localStorageValues === null &&
      stateValues.email &&
      stateValues.password &&
      Object.keys(errors).length === 0
    ) {
      setOpenDialog(true);
    }
  };

  const handleChange = event => {
    event.persist();

    setStateValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    stateValues,
    openDialog,
    setOpenDialog,
    wrongAccount,
    errors
  };
}
