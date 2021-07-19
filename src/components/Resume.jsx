import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Divider } from "@material-ui/core";
import portfilio from "../portfilio";
import ResumeCard from "./ResumeCard";
import { Fade } from "react-reveal";

const useStyle = makeStyles((theme) => ({
  introContainer: {
    height: "auto",
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

const Resume = () => {
  const classes = useStyle();
  const resumes = portfilio.resumes;
  const resumesCards = resumes.map((resume) => {
    return <ResumeCard resume={resume} key={resume.company}/>;
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
          <Typography variant="h3">Resume</Typography>
          <Divider variant="middle" className={classes.divider} />
        </Box>
      </Fade>
      <Fade left>
        <div className="resume-card-container">{resumesCards}</div>
      </Fade>
    </Box>
  );
};

export default Resume;
