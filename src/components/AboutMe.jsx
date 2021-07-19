import React from "react";
import Typed from "react-typed";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Lottie from "react-lottie";
import "../assets/css/AboutMe.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
import lottieData from "../assets/lottie/lottie.json";

const useStyles = makeStyles((theme) => ({
  typedContainer: {
    position: "absolute",
    top: "20%",
    width: "100%",
    textAlign: "left",
    zIndex: 1,
    boxSizing: "border-box",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
  social: {
    paddingTop: theme.spacing(2),
  },
  icons: {
    padding: theme.spacing(2),
  },
  lottieContainer: {
    width: theme.spacing(100),
    height: theme.spacing(80),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height:"auto"
    },
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieData,
  };
  return (
    <section className="container">
      <Box
        className={classes.typedContainer}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box flex={1}>
          <Typography className={classes.title} variant="h2">
            <Typed strings={["Zhenyu Ye"]} typeSpeed={40} />
          </Typography>

          <Typography className={classes.subtitle} variant="h5">
            <Typed
              strings={[
                "Full-Stack Developer",
                "Backend Developer",
                '"A Chef"',
              ]}
              typeSpeed={40}
              loop
            />
          </Typography>
          <Box className={classes.social} display="flex" flexDirection="row">
            <Link className={classes.icons} href="#" color="inherit">
              <FacebookIcon fontSize="large" />
            </Link>
            <Link className={classes.icons} href="#" color="inherit">
              <InstagramIcon fontSize="large" />
            </Link>
            <Link
              className={classes.icons}
              component="button"
              href="#"
              color="inherit"
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              className={classes.icons}
              component="button"
              href="#"
              color="inherit"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </Box>
        </Box>
        <Box className={classes.lottieContainer}>
          <Lottie options={lottieOptions} maxWidth="100%" maxHeight="auto" />
        </Box>
      </Box>
    </section>
  );
};

export default AboutMe;
