import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Divider } from "@material-ui/core";
import portfilio from "../portfilio";
import { Fade } from "react-reveal";
import ProjectCard from "./ProjectCard";

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

const Projects = () => {
  const classes = useStyle();
  const projects = portfilio.projects;
  const projectCards = projects.map(project=>{
    return <ProjectCard project={project} key={project.name}/>
  })
  return (
    <Box
      id="projects"
      className={classes.introContainer}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Fade right>
        <Box className={classes.title}>
          <Typography variant="h3">Projects</Typography>
          <Divider variant="middle" className={classes.divider} />
        </Box>
      </Fade>
      <Fade right>
        <div className="project-card-container">
          {projectCards}
        </div>
        
      </Fade>
    </Box>
  );
};

export default Projects;
