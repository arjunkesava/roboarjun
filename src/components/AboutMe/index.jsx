import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
  },
  cardHeading: {
    paddingBottom: theme.spacing(2),
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography variant="h5" component="h2" className={classes.cardHeading}>
        A Little About Me:
      </Typography>
      <Typography variant="body1" paragraph="true">
        Hey there, I’m a JavaScript Rockstar and currently I’m working for Cisco
        on Webex Teams. I had 3+ years of professional experience working mostly
        on Web Development Stack. PHP was my god who welcomed me into the
        software world. From there I met my girlfriend which is highly weird and
        popular. Some people call it worst, some call it great, but I call it
        Javascript
      </Typography>
      <Typography variant="body1" paragraph="true">
        I spend my free time on looking for open source js related projects and
        I try to work on those issues. You can see the below list of repos which
        I had worked on.
      </Typography>
      <Typography variant="body1" paragraph="true">
        I love Swimming and Travelling new places (mostly alone).
      </Typography>
      <Typography variant="body1" paragraph="true">
        Thank you for stopping by - Arjun Kesava (Rajinikanth)
      </Typography>
      <Typography variant="body1" paragraph="true">
        If you want to get in connection please check the top right icons as I’m
        available there (mostly on Twitter & LinkedIn)
      </Typography>
    </Container>
  );
}
