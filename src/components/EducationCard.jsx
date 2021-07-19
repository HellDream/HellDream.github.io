import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%"
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    marginTop: theme.spacing(3),
  },
  description: {},
}));
const EducationCard = (props) => {
  const data = props.education;
  const classes = useStyle();
  return (
    <Card className={classes.container}>
        <CardContent className={classes.cardBody}>
            <Typography variant="h4">{data.college}</Typography>
            <p className="edu-degree">{data.degree}</p>
            <p className="edu-date">{data.date}</p>
            <p className="edu-course">Core Courses:</p>
            <ul>
                {data.courses.map(c=>{
                    return <li key={c}>{c}</li>
                })}
            </ul>
        </CardContent>
    </Card>
  );
};

export default EducationCard;
