import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import welcomeImage from "../images/SVG/bg_welcome.svg";
import Button from "@material-ui/core/Button";

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
    padding: "5%",
    backgroundColor: "navy"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  cover: {
    maxWidth: "100%",
    height: "auto"
  },
  button1: {
    color: "#FFF",
    margin: "8px 8px 8px 0"
  },
  button2: {
    color: "#FFF",
    margin: 8,
    background:
      "linear-gradient(42deg, rgba(255,139,209,1) 0%, rgba(255,61,136,1) 100%)"
  },
  links: {
    textDecoration: "none"
  },
  title: {
    fontWeight: "bold",
    color: "#00C3D9",
    padding: "0 5%"
  },
  subtitle: {
    color: "rgb(188, 224, 226)",
    fontWeight: "bold",
    padding: "0 5%"
  },
  genPadding: {
    padding: "0 5%"
  }
}));

export default function Welcome() {
  const classes = useStyles();

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
        <Typography className={classes.title} gutterBottom variant='h3'>
          Welcome to Whale Dentist
        </Typography>
        <Typography className={classes.subtitle} gutterBottom variant='body1'>
          Let us make your teeth as strong as a whale. <br />
          No matter what you bite, we will take care of you
        </Typography>
        <div className={classes.genPadding}>
          <Link className={classes.links} to='/login'>
            <Button className={classes.button1}>Log in</Button>
          </Link>

          <Link className={classes.links} to='/sign-up'>
            <Button variant='contained' className={classes.button2}>
              Sign Up
            </Button>
          </Link>
        </div>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <img className={classes.cover} src={welcomeImage} alt='example' />
      </Grid>
    </Grid>
  );
}
