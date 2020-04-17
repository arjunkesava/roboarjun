import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import SocialGrid from "../SocialGrid";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      marginBottom: "8px",
    },
  },
  titleText: {
    textDecoration: "none !important",
    fontWeight: "300",
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      fontWeight: "lighter",
    },
  },
  appBar: {
    backgroundColor: "#fff",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link
              href="https://roboarjun.dev/"
              target="_top"
              className={classes.titleText}
            >
              roboarjun.dev
            </Link>
          </Typography>
          <SocialGrid />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
