import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import { IconButton, Hidden } from "@material-ui/core";

const useStyles = makeStyles({
  menuButton: {
    marginRight: 36,
  },
});

interface Props {
  toggleDrawer: () => void;
}

const NavDrawerToggleButton: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { toggleDrawer } = props;

  return (
    <Hidden smUp implementation="css">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
    </Hidden>
  );
};

export default NavDrawerToggleButton;
