// import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RedditIcon from "@material-ui/icons/Reddit";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

const useStyles = makeStyles(() => ({
  github: {
    color: "#000000",
  },
  facebook: {
    color: "#395598",
  },
  linkedin: {
    color: "#0171ae",
  },
  gmail: {
    color: "#d5493e",
  },
  twitter: {
    color: "#03a7e7",
  },
  reddit: {
    color: "#f84302",
  },
}));

export default function SocialGrid() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row-reverse"
      justify="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Link
          href="https://twitter.com/roboarjun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className={classes.twitter} />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://www.facebook.com/arjun.kesava"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className={classes.facebook} />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://www.linkedin.com/in/arjunkesava/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className={classes.linkedin} />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://www.reddit.com/user/arjunkesava/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RedditIcon className={classes.reddit} />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="mailto:arjun.kesava@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon className={classes.gmail} />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://github.com/arjunkesava"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className={classes.github} />
        </Link>
      </Grid>
    </Grid>
  );
}
