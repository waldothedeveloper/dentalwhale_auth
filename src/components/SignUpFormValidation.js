//regex for special characters

const NoSpecialCharRegex = /[!\\@/#$%^&*(),';.?":{}[\]|<>]/g;

//regex for numbers
const NoNumbersRegex = /\d/g;

//regex to check for valid email
//eslint-disable-next-line
const ValidEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//Checking for Strong
const strongPasswordRegex = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
);

export default function SignUpFormValidation(values) {
  let errors = {};

  //first name
  if (!values.firstName) {
    errors.firstName = "First Name is required";
    errors.bool = true;
    console.error("First Name is required");
  } else if (NoSpecialCharRegex.test(values.firstName)) {
    errors.firstName = "First Name cannot contain special characters";
    errors.bool = true;
    console.error("First Name cannot contain special characters");
  } else if (NoNumbersRegex.test(values.firstName)) {
    errors.firstName = "First Name cannot contain numbers";
    errors.bool = true;
    console.error("First Name cannot contain numbers");
  }
  //last name
  if (!values.lastName) {
    errors.lastName = "Last Name is required";
    errors.bool = true;
    console.error("Last Name is required");
  } else if (NoSpecialCharRegex.test(values.lastName)) {
    errors.lastName = "Last Name cannot contain special characters";
    errors.bool = true;
    console.error("Last Name cannot contain special characters");
  } else if (NoNumbersRegex.test(values.lastName)) {
    errors.lastName = "Last Name cannot contain numbers";
    errors.bool = true;
    console.error("LastName cannot contain numbers");
  }

  //email
  if (!values.email) {
    errors.email = "Emai is required";
    console.error("Please select a valid email");
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
  } else if (!strongPasswordRegex.test(values.password)) {
    errors.password =
      "Password should contain at least one uppercase, one digit, one special character, also password length should be minimum 8 characters";
    console.error(
      "Password should contain at least one uppercase, one digit, one special character, also password length should be minimum 8 characters"
    );
    errors.bool = true;
  }
  //password
  if (!values.repeated_password) {
    errors.repeated_password = "Please enter your password again";
    console.error("Please enter your password again");
    errors.bool = true;
  } else if (values.password !== values.repeated_password) {
    errors.repeated_password = "Your password does not match";
    console.error("Your password does not match");
    errors.bool = true;
  }

  return errors;
}
