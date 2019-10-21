//regex to check for valid email
const ValidEmailAddress = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;

export default function LoginFormValidation(values) {
  let errors = {};

  //email
  if (!values.email) {
    errors.email = "Email is required";
    console.error("Please enter a valid email");
    errors.bool = true;
  } else if (!ValidEmailAddress.test(values.email)) {
    errors.email = "Please enter a valid email address";
    errors.bool = true;
    console.error("Please enter a valid email address");
  }

  //password
  if (!values.password) {
    errors.password = "Please enter your password";
    console.error("Please enter your password");
    errors.bool = true;
  }

  return errors;
}
