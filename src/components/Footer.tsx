import * as React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Grid container spacing={4} justify="space-evenly">
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Company
          </Typography>
          <ul>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Team
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                History
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Locations
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Features
          </Typography>
          <ul>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Random feature
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Team feature
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Developer stuff
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Another one
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Resources
          </Typography>
          <ul>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Resource
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Resource name
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Another resource
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Final resource
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Legal
          </Typography>
          <ul>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Terms of Use
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
