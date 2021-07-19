import React from "react";
import AppBar from "@material-ui/core/AppBar";

import {  makeStyles } from "@material-ui/core/styles";
import "../assets/css/Navigation.css";
const useStyle = makeStyles((theme) => ({
  header: {
    backgroundColor: "#222",
    margin: 0,
  },
}));

const Navigation = () => {
  const styles = useStyle();
  return (
      
        <AppBar className={styles.header}>
          <h2 className="nav-name">Zhenyu Ye</h2>
        </AppBar>
  );
};

export default Navigation;
