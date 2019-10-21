import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import dentist_registration from "../images/dentist_registration.svg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import useSignUpForm from "../components/useSignUpForm";
import SignUpFormValidation from "../components/SignUpFormValidation";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: "0 auto",
    boxShadow:
      "0 13px 27px -5px rgba(196,196,196,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)",
    padding: "5%"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  cover: {
    maxWidth: "100%",
    height: "auto"
  },
  links: {
    textDecoration: "none"
  },
  pickerContainer: {
    width: "70%"
  },
  pickerText: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  pickerText2: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  genPadding: {
    padding: "0 5%"
  },
  title: {
    fontWeight: "bold",
    color: "rgb(43,203,48)",
    marginBottom: "4rem"
  },
  buttons: {
    backgroundColor: "rgb(25,72,102)",
    margin: 8,
    color: "#FFF",
    "&:hover": {
      backgroundColor: "rgb(30,18,64)"
    }
  },
  button2: {
    backgroundColor: "rgb(49,162,220)",
    margin: 8,
    color: "#FFF",
    "&:hover": {
      backgroundColor: "rgb(30,18,64)"
    }
  }
}));

export default function SignUp() {
  const classes = useStyles();

  const { handleChange, handleSubmit, values, errors } = useSignUpForm(
    SignUpFormValidation
  );

  return (
    <Grid container className={classes.root}>
      <Grid
        className={classes.textContainer}
        item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        xl={6}
      >
        <Typography className={classes.title} variant='h4'>
          Register with us. <br />
          One two three let's go
        </Typography>
        <FormControl className={classes.pickerContainer}>
          <FormGroup className={classes.pickerText}>
            <Link className={classes.links} to='/login'>
              <Button className={classes.buttons}>Back to Log in</Button>
            </Link>
          </FormGroup>
          <FormGroup className={classes.pickerText2}>
            <TextField
              className={classes.textField}
              required
              id='firstname-required'
              label='First Name'
              error={errors.firstName ? true : false}
              value={values.firstName || ""}
              helperText={errors.firstName ? errors.firstName : ""}
              onChange={handleChange}
              name='firstName'
              placeholder='John Doe'
              margin='normal'
              variant='outlined'
            />
            <TextField
              className={classes.textField}
              required
              id='lastname-required'
              label='Last Name'
              error={errors.lastName ? true : false}
              value={values.lastName || ""}
              helperText={errors.lastName ? errors.lastName : ""}
              onChange={handleChange}
              name='lastName'
              placeholder='John Doe'
              margin='normal'
              variant='outlined'
            />
            <TextField
              className={classes.textField}
              required
              id='email-required'
              label='Email'
              error={errors.email && true}
              value={values.email || ""}
              helperText={errors.email || ""}
              onChange={handleChange}
              name='email'
              placeholder='noreply@gmail.com'
              margin='normal'
              variant='outlined'
            />
            <TextField
              className={classes.textField}
              required
              id='password-required'
              label='Password'
              error={errors.password && true}
              value={values.password || ""}
              helperText={errors.password || ""}
              onChange={handleChange}
              name='password'
              placeholder='my super secret password 123'
              margin='normal'
              variant='outlined'
            />
            <TextField
              className={classes.textField}
              required
              id='repeated_password-required'
              label='Repeat Password'
              error={errors.repeated_password && true}
              value={values.repeated_password || ""}
              helperText={errors.repeated_password || ""}
              onChange={handleChange}
              name='repeated_password'
              placeholder='my super secret password 123'
              margin='normal'
              variant='outlined'
            />
          </FormGroup>

          <Button
            className={classes.button2}
            variant='contained'
            onClick={handleSubmit}
          >
            Login
          </Button>
        </FormControl>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <img
          className={classes.cover}
          src={dentist_registration}
          alt='example'
        />
      </Grid>
    </Grid>
  );
}
