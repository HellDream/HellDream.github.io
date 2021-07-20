import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import portfilio from "../portfilio";

const useStyles = makeStyles((theme) => ({
  icons: {
    padding: theme.spacing(2),
  },
  icon: {
      color: "black"
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <div className="footer-container">
        <h3 className="footer-name">Zhenyu Ye</h3>
        <Box display="flex" flexDirection="row">
          <Link className={classes.icons} href={portfilio.socialLink.facebook}>
            <IconButton>
              <FacebookIcon className={classes.icon} fontSize="small" />
            </IconButton>
          </Link>
          <Link href={portfilio.socialLink.instagram} className={classes.icons}>
            <IconButton>
              <InstagramIcon className={classes.icon} fontSize="small" />
            </IconButton>
          </Link>
          <Link className={classes.icons} href={portfilio.socialLink.github}>
            <IconButton>
              <GitHubIcon className={classes.icon} fontSize="small" />
            </IconButton>
          </Link>

          <Link href={portfilio.socialLink.linkedIn} className={classes.icons}>
            <IconButton>
              <LinkedInIcon className={classes.icon} fontSize="small" />
            </IconButton>
          </Link>
        </Box>
        <div>
            
          Design with <a className="design" href="https://material-ui.com/">Material UI</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
