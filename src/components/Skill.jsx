import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Divider, Paper } from "@material-ui/core";
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
  skillContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    flexWrap: "wrap",
    width: "100%",
  },
}));

const Skill = () => {
  const classes = useStyle();
  return (
    <Box
      id="resume"
      className={classes.introContainer}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Fade right collapse>
        <Box className={classes.title}>
          <Typography variant="h3">Skill</Typography>
          <Divider variant="middle" className={classes.divider} />
        </Box>
      </Fade>
      <Fade right>
          <div className="skill-container">

          
        <Paper className={classes.skillContainer}>
          <span
            class="iconify icon"
            data-icon="logos:java"
            data-inline="false"
          ></span>
          <span
            class="iconify icon"
            data-icon="tabler:brand-javascript"
            data-inline="false"
            style={{ color: "#efd81e" }}
          ></span>
          <span
            class="iconify icon"
            data-icon="logos:python"
            data-inline="false"
          ></span>
          <span
            class="iconify icon"
            data-icon="vscode-icons:file-type-dartlang"
            data-inline="false"
          ></span>
          <span
            class="iconify icon"
            data-icon="vscode-icons:file-type-html"
            data-inline="false"
          ></span>
          <span
            class="iconify icon"
            data-icon="vscode-icons:file-type-css"
            data-inline="false"
          ></span>
          <span
            class="iconify icon"
            data-icon="logos:aws"
            data-inline="false"
          ></span>
          <span
            class="iconify icon"
            data-icon="logos:firebase"
            data-inline="false"
          ></span>
          <span
            class="iconify icon"
            data-icon="logos:flutter"
            data-inline="false"
          ></span>
          <span
            class="iconify icon"
            data-icon="logos:spring"
            data-inline="false"
            data-width="200"
            data-height="200"
          ></span>
          <span
            class="iconify icon"
            data-icon="logos:react"
            data-inline="false"
          ></span>
          <span
            class="iconify icon"
            data-icon="logos:nodejs"
            data-inline="false"
          ></span>
          <span
            class="iconify icon"
            data-icon="simple-icons:mysql"
            data-inline="false"
            style={{ color: "#04738e" }}
          ></span>
          <span
            class="iconify icon"
            data-icon="logos:mongodb"
            data-inline="false"
          ></span>
          <span
            class="iconify icon"
            data-icon="logos:redis"
            data-inline="false"
          ></span>
        </Paper></div>
      </Fade>
    </Box>
  );
};

export default Skill;
