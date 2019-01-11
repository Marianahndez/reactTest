import React, { Component } from 'react';
import classNames from 'classnames';
import './assets/styles/App.scss';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import hola from './containers/hola';
import test1 from './containers/test1';
import { BrowserRouter as Router } from "react-router-dom";


const drawerSize = 240;
 
 const styles = theme => ({
  appBarShift: {
    marginLeft: drawerSize,
    width: `calc(100% - ${drawerSize}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerSize,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerSize,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
}); 

class App extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const menu = (
      <div className={classes.list}>
        <List>
            <Link to='/'>
              <ListItem button >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Pay Bill" />
              </ListItem>
            </Link>
            <Divider />

            <Link to='/test'>
              <ListItem button >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Register Complaint" />
              </ListItem>
            </Link>
            <Divider />

            <Link to='/test'>
              <ListItem button >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Complaint Status" />
              </ListItem>
            </Link>
            <Divider />
        </List>
      </div>
    );

    return (
      <div className="App">
        <div className="Appheader">
          <AppBar position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: this.state.open,
            })}
          >
            <Toolbar>
              <IconButton onClick={this.toggleDrawer('left', true)} className="menuButton" color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" color="inherit" >
                
              </Typography>
            </Toolbar>
          </AppBar>

          <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {menu}
          </div>
        </SwipeableDrawer>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
