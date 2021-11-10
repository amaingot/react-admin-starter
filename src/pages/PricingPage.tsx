import * as React from "react";

// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
// import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Layout from "../components/Layout";
// import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  cardFeatures: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
}));

const PricingPage: React.FC = () => {
  // const history = useHistory();
  const classes = useStyles();
  // const plansResponse = useListPlansQuery();
  // const plans = plansResponse.data?.plans || [];

  return (
    <Layout showFooter>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default Material-UI components
          with little customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="flex-end">
          {/* {plans
            .sort((p1, p2) => p1.amount - p2.amount)
            .map((plan) => (
              <Grid item key={plan.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardHeader
                    title={plan.nickname}
                    subheader={plan.description}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    action={plan.nickname === "Pro" ? <StarIcon /> : null}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography
                        component="h2"
                        variant="h3"
                        color="textPrimary"
                      >
                        ${plan.amount / 100}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /mo
                      </Typography>
                    </div>
                    <ul className={classes.cardFeatures}>
                      {plan.features.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={
                        plan.nickname === "Pro" ? "contained" : "outlined"
                      }
                      color="primary"
                      onClick={() => history.push(`/sign-up?planId=${plan.id}`)}
                    >
                      Get Started
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))} */}
        </Grid>
      </Container>
    </Layout>
  );
};

export default PricingPage;
