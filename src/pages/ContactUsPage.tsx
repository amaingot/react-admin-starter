import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/Layout";

const useStyles = makeStyles({
  gridContainer: {
    marginTop: 16,
  },
});

const ContactUsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout title="Contact Us">
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="A Card" />
            <CardContent>
              <Typography>Some card content</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Another Card" />
            <CardContent>
              <Typography>Some more card content</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContactUsPage;
