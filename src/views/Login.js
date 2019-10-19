import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import dentist_equipment from "../images/dentist_equipment.svg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import useLoginForm from "../components/useLoginForm";
import LoginFormValidation from "../components/LoginFormValidation";
import FirstUserDialog from "../views/FirstUserDialog";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "80%",
    maxWidth: "80%",
    boxShadow:
      "0 13px 27px -5px rgba(196,196,196,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)",
    padding: "5%"
    // backgroundColor: "rgb(49, 162, 220)"
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
  alertMessage: {
    color: "#d21919"
  },
  buttons: {
    backgroundColor: "rgb(25,72,102)",
    margin: 8,
    color: "#FFF"
  },
  button2: {
    backgroundColor: "rgb(49,162,220)",
    margin: 8,
    color: "#FFF"
  }
}));

export default function Login() {
  const classes = useStyles();

  const {
    stateValues,
    errors,
    openDialog,
    setOpenDialog,
    handleChange,
    wrongAccount,
    handleSubmit
  } = useLoginForm(LoginFormValidation);

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
          Sign In or <br /> Create an Account
        </Typography>
        {wrongAccount && (
          <Typography className={classes.alertMessage} variant='body2'>
            "What you entered doesn’t match what we have on file. <br /> Please
            verify email and password";
          </Typography>
        )}
        <FormControl className={classes.pickerContainer}>
          <FormGroup className={classes.pickerText}>
            <Link className={classes.links} to='/sign-up'>
              <Button className={classes.buttons}>Sign up</Button>
            </Link>
          </FormGroup>
          <FormGroup className={classes.pickerText2}>
            <TextField
              className={classes.textField}
              required
              id='email-required'
              label='Email'
              error={errors.email && true}
              value={stateValues.email || ""}
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
              value={stateValues.password || ""}
              helperText={errors.password || ""}
              onChange={handleChange}
              name='password'
              placeholder='my super secret password 123'
              margin='normal'
              variant='outlined'
            />
          </FormGroup>
          <Button
            className={classes.button2}
            variant='contained'
            // onClick={loginUser}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <img className={classes.cover} src={dentist_equipment} alt='example' />
      </Grid>
      <FirstUserDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Grid>
  );
}
