import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Divider } from "@material-ui/core";
import AboutCard from "./AboutCard";
import { Fade } from "react-reveal";
const useStyles = makeStyles((theme) => ({
  introContainer: {
    marginTop:"2rem",
    height: "auto",
    width: "100%",
    marginBottom: "3rem",
  },
  title: {
    "text-transform": "uppercase",
    textAlign: "center",
  },
  divider: {
    backgroundColor: "grey",
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <Box
      id="about"
      className={classes.introContainer}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Fade right collapse>
        <Box className={classes.title}>
          <Typography variant="h3">About Me</Typography>
          <Divider variant="middle" className={classes.divider} />
        </Box>
      </Fade>
      <Fade right>
        <AboutCard />
      </Fade>
    </Box>
  );
};

export default Intro;
