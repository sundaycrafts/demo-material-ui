import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import { useTheme } from "./theme";
import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Toolbar,
  Drawer,
  Divider,
  List,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import { Orders } from "./Orders";
import { Deposits } from "./Deposits";

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar
}));

export const App = () => {
  const [theme] = useTheme();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color={"secondary"}>
              <NotificationIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"right"} open={open} onClose={handleDrawerClose}>
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>

      <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={"xl"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} lg={9}>
              {/*  Chart */}
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Deposits />
            </Grid>
            <Grid item xs={12}>
              <Orders />
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};
