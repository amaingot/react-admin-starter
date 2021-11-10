import * as React from "react";
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
} from "@material-ui/core";

import {
  Dashboard as DashboardIcon,
  Group as EmployeesIcon,
  PermContactCalendar as CustomersIcon,
  BarChart as ReportsIcon,
  Assignment as JobsIcon,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export const DRAWER_WIDTH = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
}));

const DrawerContents: React.FC = () => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <>
      <div className={classes.toolbar} />
      <List>
        <ListItem button onClick={() => push("/app/dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => push("/app/jobs")}>
          <ListItemIcon>
            <JobsIcon />
          </ListItemIcon>
          <ListItemText primary="Jobs" />
        </ListItem>
        <ListItem button onClick={() => push("/app/customers")}>
          <ListItemIcon>
            <CustomersIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button onClick={() => push("/app/employees")}>
          <ListItemIcon>
            <EmployeesIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItem>
        <ListItem button onClick={() => push("/app/reports")}>
          <ListItemIcon>
            <ReportsIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </>
  );
};

interface Props {
  onDrawerToggle: () => void;
  mobileOpen: boolean;
}

const NavDrawer: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { onDrawerToggle, mobileOpen } = props;

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="js">
        <Drawer
          container={window.document.body}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={onDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={
            {
              // keepMounted: true, // Better open performance on mobile.
            }
          }
        >
          <DrawerContents />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="js">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <DrawerContents />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default NavDrawer;
