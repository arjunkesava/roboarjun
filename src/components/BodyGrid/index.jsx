import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
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
  comingSoon: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  comingSoonSubText: {
    paddingTop: theme.spacing(2),
  },
}));

export default function BodyGrid() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h4" className={classes.comingSoon}>
                Coming Soon
              </Typography>
              <Divider />
              <Typography variant="subtitle2" className={classes.comingSoonSubText}>
                More content to be comming soon, check back later.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
