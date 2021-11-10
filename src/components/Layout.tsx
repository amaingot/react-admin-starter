import * as React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Copyright from "./Copyright";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";
import NavDrawer, { DRAWER_WIDTH } from "./NavDrawer";
import NavDrawerToggleButton from "./NavDrawerToggleButton";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarPlaceholder: theme.mixins.toolbar,
  toolbarTitle: {
    flexGrow: 1,
    cursor: "pointer",
  },
  fullWidthLayout: {
    width: "auto",
    maxWidth: "unset",
    margin: theme.spacing(0, 0, 2, 0),
    padding: theme.spacing(0, 0, 2, 0),
  },
  showDrawerLayout: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: `${DRAWER_WIDTH}px !important`,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
  },
  footer: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(6),
  },
  logo: {
    maxHeight: theme.spacing(6),
    marginRight: theme.spacing(2),
  },
  navButton: {
    leftMargin: theme.spacing(4),
  },
}));

interface Props {
  title?: string;
  showTopNav?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  showFooter?: boolean;
  showDrawerNav?: boolean;
}

const Layout: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const {
    title = "",
    showTopNav = true,
    size = "xl",
    fullWidth = false,
    showFooter = false,
    showDrawerNav = false,
  } = props;

  const pageTitle = `Cool Sample App ${title && `| ${title}`}`;

  React.useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {(showTopNav || showDrawerNav) && (
        <>
          <TopNavBar
            toggleDrawerButton={
              showDrawerNav
                ? () => (
                    <NavDrawerToggleButton toggleDrawer={handleDrawerToggle} />
                  )
                : undefined
            }
            title={pageTitle}
          />
          <div className={classes.toolbarPlaceholder} />
        </>
      )}
      {showDrawerNav && (
        <NavDrawer
          mobileOpen={mobileOpen}
          onDrawerToggle={handleDrawerToggle}
        />
      )}

      <Container
        maxWidth={fullWidth ? undefined : size}
        component="main"
        className={clsx(
          fullWidth && classes.fullWidthLayout,
          showDrawerNav && classes.showDrawerLayout
        )}
      >
        {props.children || <></>}
      </Container>
      <footer
        className={clsx(
          showDrawerNav && classes.showDrawerLayout,
          classes.footer
        )}
      >
        {showFooter && <Footer />}
        <Copyright />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
