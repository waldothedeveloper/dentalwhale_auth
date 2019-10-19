import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { fakeAuth } from "../context/userContext";

export default function useSignUpForm(validate) {
  const [values, setValues] = React.useState("");
  // console.log("values on the useSignUpForm: ", values);
  const [errors, setErrors] = React.useState({});

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/account" } };

  let loginUser = () => {
    console.log("this is running");
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  //checking errors or invalid input
  React.useEffect(() => {
    if (Object.keys(values).length > 0) {
      setErrors(validate(values));
    }
    //eslint-disable-next-line
  }, [values]);

  // If there's no errors and the form has submitted
  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && Object.keys(values).length > 0) {
      if (localStorage.length > 0) {
        const oldStorage = JSON.parse(localStorage.getItem("CachedUsers"));
        const unifiedStorage = [...oldStorage, values];

        localStorage.setItem("CachedUsers", JSON.stringify(unifiedStorage));
      } else {
        localStorage.setItem("CachedUsers", JSON.stringify([values]));
      }
    }
    //eslint-disable-next-line
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();

    setErrors(validate(values));
    if (Object.keys(errors).length === 0) {
      loginUser();
    }
  };

  const handleChange = event => {
    event.persist();

    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
}
