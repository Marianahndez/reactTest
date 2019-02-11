import React, { Component } from 'react';
import classNames from 'classnames';
import '../assets/styles/App.scss';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, withStyles, MenuItem, Button } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Listalt from '@material-ui/icons/ListAlt'
import MailIcon from '@material-ui/icons/Mail';
import Error from '@material-ui/icons/ReportProblem';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Fab from '@material-ui/core/Fab';
import Done from '@material-ui/icons/Done';
import ImgLogo from '../assets/img/logobbps.svg';
import LogoBA from '../assets/img/Machnet.png';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

/* Biller & System, same views */

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
  rootCheckBox: {
    color: "#3e8424",
    '&$checked': {
      color: "#3e8424",
    },
  },
  checked: {},
}); 

function getSteps() {
  return ['Select Complaint Type', 'Select Participation Type', 'Enter Information'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

class RCB extends Component {
  state = {
    age: '1',
    name: '',
    multiline: 'Controlled',
    currency: 'EUR',
    selectedValue: 'c',
    agentID: 'Enter ID',
    activeStep: 0,
  };
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value, selectedValue: event.target.value });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    const menu = (
      <div className="list">
        <List className="topPadd">
              <ListItem button >
                <ListItemIcon className="iconmenu">
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText className="menutxt" primary="Pay Bill" />
              </ListItem>
            <Divider />

            {/* <Link to='/RegisterComplaint'> */}
              <ListItem button selected>
                <ListItemIcon className="iconmenu">
                  <Listalt />
                </ListItemIcon>
                <ListItemText className="menutxt" primary="Register Complaint" />
              </ListItem>
            {/* </Link> */}
            <Divider />

            {/* <Link to='/ComplainStatus'> */}
              <ListItem button >
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

          {/* <SwipeableDrawer
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
        </SwipeableDrawer> */}

        <Grid xs ={12} className="Appheader">
        <Stepper activeStep={activeStep} alternativeLabel className="stepper">
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
          <Paper elevation={1} className="paper">
            <Grid xs={12}>
              <Typography variant="h5" component="h3" className="mainHeader">
                Complaint Type
              </Typography>
            </Grid>
            <div className="card">
            <Grid xs={4}>
                <Typography component="p">
                <FormControl className="formControl">
                  
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    className="SelectMain"
                    input={<Input name="age" id="age-native-label-placeholder" />}
                  >
                    <MenuItem value={20}><em>Select Complaint Type</em></MenuItem>
                    <MenuItem value={10}>Transaction Type</MenuItem>
                    <MenuItem value={1}>Service Type</MenuItem>
                  </Select>
                </FormControl>
                </Typography>
              </Grid>

              <Grid xs={4}>
                <Typography component="p">
                <FormControl className="formControl">
                  
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    className="SelectMain"
                    input={<Input name="age" id="age-native-label-placeholder" />}
                  >
                    <MenuItem value={11}><em>Select Type of Participation</em></MenuItem>
                    <MenuItem value={15}>Agent</MenuItem>
                    <MenuItem value={1}>Biller</MenuItem>
                    <MenuItem value={18}>System</MenuItem>
                  </Select>
                </FormControl>
                </Typography>
              </Grid>

            </div>
            </Paper>

            <Paper elevation={1} className="paper">
              <Grid xs={12}>
                <Typography variant="h5" component="h3" className="tittleSec">
                  Register Service Complaint
                </Typography>
              </Grid>
              <div className="card">
                <Grid xs={3}>
                <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                      Agent ID*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value={this.state.agentID}
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                <FormControl className="formControl_select">
                  <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                    Service Reason*
                  </InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    className="SelectMain"
                    input={<Input name="age" id="age-native-label-placeholder" />}
                  >
                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                    <MenuItem value={122}>Agent overcharging</MenuItem>
                    <MenuItem value={15}>Agent misbehaved</MenuItem>
                    <MenuItem value={13}>Agent outlet closed</MenuItem>
                    <MenuItem value={16}>Agent denying registration of complaint</MenuItem>
                    <MenuItem value={11}>Agent not accepting certain bills</MenuItem>
                    <MenuItem value={10}>Agent overcharging</MenuItem>
                  </Select> 
                </FormControl>
                </Grid>

                <Grid xs={6}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                      Complaint Description*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="Enter Complaint Description"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

              </div>

              <div className="card">
                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                      Mobile Number*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="+91 "
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3} className="left buttonsArea">
                <Button className="btnGeneral" disabled>Generate OTP</Button>
                <Button className="btnGeneral" disabled>Resend OTP</Button>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                      Enter OTP*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="OTP"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3} className="left buttonsArea">
                    <Button className="btnGeneral" disabled>Submit</Button>
                </Grid>
              </div>


              {/* <div className="card_rc">
              <Grid xs={4}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                      Enter OTP*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="OTP"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={7} className="buttonsArea">
                  <Button className="btnGeneral" disabled>Resend OTP</Button>
                  <Button className="btnGeneral" disabled>Generate OTP</Button>
                </Grid>
              </div> */}
          </Paper>
        </Grid>
      </div>
    );
  }
}

RCB.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RCB);
