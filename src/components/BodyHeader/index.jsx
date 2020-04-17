import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
import profileImg from "../../images/profile.jpg";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 0, 2),
    margin: theme.spacing(0),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  name: {
    marginTop: theme.spacing(2),
  },
  heart: {
    color: "red",
    marginTop: theme.spacing(1),
  },
  subText: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: "block"
    },
  },
}));

export default function BodyHeader() {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Grid container justify="center">
          <Avatar
            src={profileImg}
            alt="Arjun Kesava"
            className={classes.large}
            align="center"
          >
            AK
          </Avatar>
        </Grid>
        <Typography
          component="h3"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
          className={classes.name}
        >
          Arjun Kesava
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component={'span'}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.subText}
          >
            <Grid item>
            &nbsp;&nbsp;Software Engineer @ Cisco Systems | Working on WebEx | {'  '}
            </Grid>
            <Grid item>
              &nbsp;<FavoriteIcon className={classes.heart} fontSize="small" />&nbsp;
            </Grid>
            <Grid item>JS</Grid>
          </Grid>
        </Typography>
      </Container>
    </div>
  );
}
