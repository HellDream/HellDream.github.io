import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography, Avatar } from "@material-ui/core";
import self from "../assets/images/self.jpg";
import portfilio from "../portfilio";
const useStyle = makeStyles((theme) => ({
  container: {
    boxSizing: "block",
    margin: theme.spacing(10),
    [theme.breakpoints.down("xs")]:{
      margin: theme.spacing(3)
    }
  },
  descriptionContainer: {
    padding: theme.spacing(10),
    [theme.breakpoints.down("xs")]:{
      padding: theme.spacing(2)
    }
  },
  avatarContainer: {
    margin: theme.spacing(5),
    height: "100%",
  },
  avatar: {
    width: "200px",
    height: "200px",
    [theme.breakpoints.up("md")]: {
      width: "300px",
      height: "300px",
    },
  },
}));

const AboutCard = () => {
  const classes = useStyle();
  return (
    <Paper elevation={3} className={classes.container}>
      <div className="intro-container">
        <Box className={classes.avatarContainer}>
          <Avatar className={classes.avatar} alt="Zhenyu Ye" src={self} />
        </Box>
        <Box
          className={classes.descriptionContainer}
          display="flex"
          flexDirection="column"
        >
          <Typography color="primary" variant="h4">
            Yo! What's Up!
          </Typography>
          <p className="profile-intro">{portfilio.intro}</p>
        </Box>
      </div>
    </Paper>
  );
};

export default AboutCard;
