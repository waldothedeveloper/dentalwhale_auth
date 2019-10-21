import React from "react";
import { useHistory } from "react-router-dom";
import { fakeAuth } from "../context/userContext";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import PhoneIcon from "@material-ui/icons/Phone";
import Button from "@material-ui/core/Button";
import GetFakeUser from "../components/getFakeUser";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SettingsIcon from "@material-ui/icons/Settings";
import ReferralsList from "./ReferralsList";
import dentistOffice from "../images/dentist_office.svg";
import Badge from "@material-ui/core/Badge";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "2rem auto 0 auto",
    height: "100%",
    width: "82%",
    boxShadow:
      "0 13px 27px -5px rgba(196,196,196,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)",
    padding: "1%",
    background: "#e6edf7"
  },
  bigAvatar: {
    margin: 10,
    width: 80,
    height: 80
  },
  phone: {
    margin: theme.spacing(1),
    boxShadow: "none",
    width: "50%",
    border: "1px solid #b5b4b2",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#0B53FC",
      color: "#fafafa"
    }
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  cover: {
    marginTop: "4rem",
    maxWidth: "100%",
    height: "auto"
  },
  Appointmentcard: {
    minWidth: 275,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    backgroundColor: "#0B53FC",
    color: "#fafafa",
    marginTop: "1rem"
  },
  cardContAppointment: {
    paddingTop: 24,
    paddingBottom: 16
  },
  card: {
    minWidth: 275,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "2rem",
    backgroundColor: "#FAFCFE"
  },
  cardCont: {
    padding: 16
  },
  referrals: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "4rem"
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 32px !important"
  }
}));

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

export default function Account() {
  const classes = useStyles();
  let history = useHistory();
  const [{ fakeUser, isLoading, error }] = GetFakeUser();

  React.useEffect(() => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#EBF1F7";
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Something is wrong...try again</div>;
  } else {
    return (
      <Grid container spacing={8} className={classes.root}>
        <Grid
          style={{ padding: "0 7rem", backgroundColor: "#F6FAFD" }}
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
        >
          <Badge style={{ marginTop: "10%" }} color='error' variant='dot'>
            <Typography variant='h5' gutterBottom>
              Active Appointment
            </Typography>
          </Badge>
          <Card raised={true} className={classes.Appointmentcard}>
            <CardContent className={classes.cardCont}>
              <Typography variant='h6'>
                {new Date().toLocaleDateString("en-US", options)} <br />
                {new Date().toLocaleTimeString("en-US")}
              </Typography>
              <Typography variant='caption' gutterBottom>
                Higiene and teeth whitening
              </Typography>
              <Divider orientation='vertical' />
            </CardContent>
            <CardContent className={classes.cardContAppointment}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt='other referral users'
                      src={
                        fakeUser === ""
                          ? "https://via.placeholder.com/150"
                          : fakeUser[
                              Math.floor(
                                Math.random() * (fakeUser.length - 0)
                              ) + 0
                            ].photo
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      fakeUser !== "" &&
                      fakeUser[
                        Math.floor(Math.random() * (fakeUser.length - 0)) + 0
                      ].name
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
          <img className={classes.cover} src={dentistOffice} alt='example' />
        </Grid>
        <Grid
          className={classes.rightContainer}
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
        >
          <Card raised={true} className={classes.card}>
            <CardContent className={classes.cardCont}>
              <Typography style={{ fontWeight: "bold" }} variant='body1'>
                Your discount
              </Typography>
              <Typography variant='caption' gutterBottom>
                How to increase your discount?
              </Typography>
            </CardContent>
            <CardContent
              style={{ paddingBottom: 0 }}
              className={classes.cardCont}
            >
              <Typography
                style={{ color: "#0B53FC" }}
                variant='h4'
                gutterBottom
              >
                8%
              </Typography>
            </CardContent>
          </Card>
          <figure
            style={{
              margin: 0,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: "2rem"
            }}
          >
            <SettingsIcon />
          </figure>
          <Avatar
            alt='fake user pic'
            src={
              fakeUser === ""
                ? "https://via.placeholder.com/150"
                : fakeUser[
                    Math.floor(Math.random() * (fakeUser.length - 0)) + 0
                  ].photo
            }
            className={classes.bigAvatar}
          />
          <Typography variant='h5'>
            {fakeUser !== "" &&
              fakeUser[Math.floor(Math.random() * (fakeUser.length - 0)) + 0]
                .name}
          </Typography>
          <Typography variant='body1' gutterBottom>
            {fakeUser !== "" &&
              fakeUser[Math.floor(Math.random() * (fakeUser.length - 0)) + 0]
                .position}
          </Typography>
          <Fab
            variant='extended'
            aria-label='add'
            className={classes.phone}
            href='tel:786-521-3075'
          >
            <PhoneIcon className={classes.extendedIcon} />
            786-521-3075
          </Fab>
          <Button
            onClick={() => fakeAuth.signout(() => history.push("/"))}
            variant='text'
            size='small'
            color='primary'
            className={classes.margin}
          >
            Log Out
          </Button>
          <div className={classes.referrals}>
            <Typography variant='h6'>
              Referrals:{" "}
              <span
                style={{
                  fontSize: "1rem",
                  border: "1px solid E9F0FE",
                  borderRadius: "40%",
                  background: "#E9F0FE",
                  color: "#0C53FC",
                  margin: "1rem",
                  padding: "0.1rem 0.6rem"
                }}
              >
                9
              </span>
            </Typography>
            <Button
              variant='contained'
              style={{
                background: "#E9F0FE",
                boxShadow: "none",
                color: "#0C53FC",
                fontWeight: "bold"
              }}
            >
              Discount +$34
            </Button>
          </div>
          <ReferralsList fakeUser={fakeUser} />
        </Grid>
      </Grid>
    );
  }
}
