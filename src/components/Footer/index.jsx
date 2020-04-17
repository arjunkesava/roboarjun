import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      marginBottom: "8px",
    },
  },
  titleText: {
    textDecoration: "none !important",
    fontWeight: "100",
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      fontWeight: "lighter",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Divider variant="middle" />
      <Container className={classes.footer} maxWidth="md">
        <Grid container spacing={2} direction="row" align="center">
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className={classes.title}>
              <Link href="https://roboarjun.dev/" className={classes.titleText}>
                roboarjun.dev
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="subtitle1">
              This webpage was built using{" "}
              <Link
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ReactJS
              </Link>{" "}
              &{" "}
              <Link
                href="https://material-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Material UI
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
