import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "auto"
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: theme.spacing(3),
  },
  description: {},
}));
const ResumeCard = (props) => {
  const data = props.resume;
  const classes = useStyle();
  return (
    <Card className={classes.container}>
      <CardHeader
        className={classes.cardHeader}
        title={data.company}
        style={{ background: data.color }}
      />
      <CardContent className={classes.cardBody}>
        <Avatar
          className={classes.companyAvatar}
          src={data.imgURL}
          alt={data.company}
        />
        <Typography variant="h5" className={classes.title}>
          {data.title}
        </Typography>
        <Typography variant="h6" className={classes.date}>
          {data.date}
        </Typography>
        <ul>
          {data.work.map((e) => {
            return <li key={e}>{e}</li>;
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ResumeCard;
