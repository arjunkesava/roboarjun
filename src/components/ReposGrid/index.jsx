import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import beHonestHomeImg from "../../images/behonesthome.webp";
import personalSiteImage from "../../images/personalsite.webp";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  comingSoon: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  comingSoonSubText: {
    paddingTop: theme.spacing(2),
  },
  cardHeading: {
    paddingBottom: theme.spacing(2),
  },
}));

export default function ReposGrid() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.cardHeading}
      >
        My Open Source Projects
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={personalSiteImage}
              title="roboarjun home page"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                This website!
              </Typography>
              <Typography>
                I had released my personal site also to Github. Click the source
                code button below
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/arjunkesava/roboarjun"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={beHonestHomeImg}
              title="Be Honest Home Page"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                BeHonest!
              </Typography>
              <Typography>
                If you want to recieve any honest opinions about you. This is
                your chance
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                href="https://bh.roboarjun.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/arjunkesava/be-honest"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" className={classes.comingSoon}>
                A Lot on the way
              </Typography>
              <Divider />
              <Typography
                variant="subtitle2"
                className={classes.comingSoonSubText}
              >
                More content to be coming soon, check back later.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
