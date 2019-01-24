import React, { Component } from 'react';
import '../assets/styles/App.scss';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, withStyles, MenuItem, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Listalt from '@material-ui/icons/ListAlt'
import Error from '@material-ui/icons/ReportProblem';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import ImgLogo from '../assets/img/logobbps.svg';
import LogoBA from '../assets/img/LogoBillAvenue.svg';

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
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#3e8424',
  },
  drawer: {
    width: drawerSize,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerSize,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
}); 

class ComplaintStatus extends Component {
  state = {
    age: '1',
    name: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const menu = (
      <div className="list">
          <List className="topPadd">
            {/* <Link to='/PayBill'> */}
              <ListItem button >
                <ListItemIcon className="iconmenu">
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText className="menutxt" primary="Pay Bill" />
              </ListItem>
            {/* </Link> */}
            <Divider />

            {/* <Link to='/RegisterComplaint'> */}
              <ListItem button >
                <ListItemIcon className="iconmenu">
                  <Listalt />
                </ListItemIcon>
                <ListItemText className="menutxt" primary="Register Complaint" />
              </ListItem>
            {/* </Link> */}
            <Divider />

            {/* <Link to='/ComplaintStatus'> */}
              <ListItem button selected>
                <ListItemIcon className="iconmenu">
                  <Error />
                </ListItemIcon>
                <ListItemText className="menutxt" primary="Complaint Status" />
              </ListItem>
            {/* </Link> */}
            <Divider />
        </List>
      </div>
    );

    return (
      <div className="App">
          <AppBar position="fixed"
              className={classes.appBar}
              id="appbar"
          >
            <Toolbar>
              <img src={LogoBA} className="logoBA" />
              <img src={ImgLogo} className="imglogo" />
            </Toolbar>
          </AppBar>

          <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
          <div className={classes.toolbar} />
            {menu}
      </Drawer>

        <Grid xs ={12} className="Appheader">
          <Paper elevation={1} className="paper">
              <Grid xs={12}>
                <Typography variant="h5" component="h3" className="mainHeader">
                  Check Complaint Status
                </Typography>
              </Grid>
              <div className="card">
                <Grid xs={4}>
                    <Typography component="p">
                    <FormControl className="formControl">
                      <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                        Type of Complaint*
                      </InputLabel>
                      <Select
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        className="SelectMain"
                        input={<Input name="age" id="age-native-label-placeholder" />}
                      >
                        <MenuItem value={1}><em>Select Complaint Type</em></MenuItem>
                        <MenuItem value={10}>Transaction Type</MenuItem>
                        <MenuItem value={20}>Service Type</MenuItem>
                      </Select>
                    </FormControl>
                    </Typography>
                  </Grid>

                  <Grid xs={4}>
                    <Typography component="p">
                    <FormControl className="formControl">
                      <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                      Complaint ID*
                      </InputLabel>
                      <TextField
                          id="standard-name"
                          className="textField"
                          value="Enter Complaint ID"
                          onChange={this.handleChange('name')}
                          margin="normal"
                        />
                    </FormControl>
                    </Typography>
                  </Grid>

                  <Grid xs={4} className="btnCS">
                    <Button className="btnGeneral">Check Status</Button>
                  </Grid>
                </div>
            </Paper>
        </Grid>
      </div>
    );
  }
}

ComplaintStatus.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplaintStatus);
