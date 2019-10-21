import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import welcomeImage from "../images/SVG/bg_welcome.svg";
import Fab from "@material-ui/core/Fab";
import introBg from "../images/intro-bg.svg";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "4rem auto 8rem auto",
    height: "80%",
    width: "90%",
    boxShadow:
      "0 13px 27px -5px rgba(196,196,196,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  cover: {
    padding: "18% 14% 14% 14%",
    maxWidth: "100%",
    height: "auto"
  },
  button1: {
    width: 150,
    height: 45,
    boxShadow: "none",
    color: "rgb(0,195,217)",
    margin: "8px 8px 8px 0",
    border: "1px solid rgb(0,195,217)",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "rgb(30,18,64)"
    }
  },
  button2: {
    width: 150,
    height: 45,
    boxShadow: "none",
    color: "#FAFAFA",
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
    padding: "0 10%"
  },
  subtitle: {
    color: "#00C3D9",
    opacity: 0.5,
    padding: "0 10%"
  },
  genPadding: {
    padding: "0 10%"
  }
}));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

export default function Welcome() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage: `url(${introBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "52%",
        backgroundPosition: "91% 0",
        height: "100%",
        overflow: "auto",
        marginTop: "2rem"
      }}
    >
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
            Welcome to <br />
            Whale Dentist
          </Typography>

          <Typography className={classes.subtitle} gutterBottom variant='body1'>
            Let us make your teeth as strong as a whale. <br />
            No matter what you bite, we will take care of you
          </Typography>
          <div className={classes.genPadding}>
            <Link className={classes.links} to='/login'>
              <Fab
                variant='extended'
                aria-label='delete'
                className={classes.button1}
              >
                Log in
              </Fab>
            </Link>
            <Link className={classes.links} to='/sign-up'>
              <Fab
                variant='extended'
                aria-label='delete'
                className={classes.button2}
              >
                Sign Up
              </Fab>
            </Link>
          </div>
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <div
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xy: calc(x, y) })
            }
          >
            <animated.img
              className={classes.cover}
              src={welcomeImage}
              alt='example'
              style={{ transform: props.xy.interpolate(trans1) }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
