import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  IconButton,
  Link,
} from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
  },
  cardHeader: {
    color: "white",
    textAlign: "center",
  },
  companyAvatar: {
    width: "10rem",
    height: "10rem",
  },
  cardBody: {
    margin: theme.spacing(4),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  linkIcon:{
    color: "rgb(36,118,226)",
  },
  title: {
    marginTop: theme.spacing(3),
  },
  btn: {
      paddingTop: 0,
      paddingLeft: theme.spacing(4),
      paddingBottom: "1rem"
  }
}));
const ProjectCard = (props) => {
  const data = props.project;
  const classes = useStyle();
  return (
    <Card className={classes.container}>
      <CardContent className={classes.cardBody}>
        <p className="project-name">{data.name}</p>
        <p className="project-description">{data.description}</p>
        <ul>
          {data.details.map((c) => {
            return <li key={c}>{c}</li>;
          })}
        </ul>

      </CardContent>
      {data.link && (
            <Link href={data.link} alt={data.name}>
              <IconButton className={classes.btn}>
                <LinkIcon className={classes.linkIcon} fontSize="large"/>
              </IconButton>
            </Link>
        )}
    </Card>
  );
};

export default ProjectCard;
