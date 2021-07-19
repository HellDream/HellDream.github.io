import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Divider } from "@material-ui/core";
import portfilio from "../portfilio";
import { Fade } from "react-reveal";
import EducationCard from "./EducationCard";

const useStyle = makeStyles((theme) => ({
  introContainer: {
    height: "100%",
    width: "100%",
  },
  title: {
    "text-transform": "uppercase",
    textAlign: "center",
  },
  divider: {
    backgroundColor: "grey",
  },
}));

const Education = () => {
  const classes = useStyle();
  const educations = portfilio.educations;
  const cards = educations.map((edu) => {
    return <EducationCard education={edu} key={edu.college}/>;
  });
  return (
    <Box
      id="resume"
      className={classes.introContainer}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Fade left>
        <Box className={classes.title}>
          <Typography variant="h3">Education</Typography>
          <Divider variant="middle" className={classes.divider} />
        </Box>
      </Fade>
        <Fade left>
          <div className="edu-card-container">{cards}</div>
        </Fade>
    </Box>
  );
};

export default Education;
