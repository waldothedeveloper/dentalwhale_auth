import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import "../css/referralsCSS.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "2rem",
    maxHeight: "50vh",
    overflow: "scroll"
  }
}));

export default function FolderList({ fakeUser }) {
  const classes = useStyles();
  return (
    <>
      {fakeUser !== "" && (
        <List className={classes.root}>
          {fakeUser.map((user, id) => {
            return (
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar alt='other referral users' src={user.photo} />
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={user.position} />
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
}
