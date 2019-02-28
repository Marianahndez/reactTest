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
import LogoBA from '../assets/img/Machnet.png';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Radio from '@material-ui/core/Radio';

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
  return ['Select a Biller', 'Select a Biller', 'Add your info'];
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

class PayStatus extends Component {
  state = {
    age: '1',
    name: '',
    multiline: 'Controlled',
    currency: 'EUR',
    activeStep:0,
    selectedValue: 'c',
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
    this.setState({ [name]: event.target.value });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const steps = getSteps();
    const { activeStep } = this.state;
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
            {/* <Link to='/PayStatus'> */}
            <ListItem button selected>
                <ListItemIcon>
                  <Error />
                </ListItemIcon>
                <ListItemText className="menutxt" primary="Payment Status" />
              </ListItem>
            {/* </Link> */}

            {/* <Link to='/RegisterComplaint'> */}
              <ListItem button >
                <ListItemIcon className="iconmenu">
                  <Listalt />
                </ListItemIcon>
                <ListItemText className="menutxt" primary="Register Complaint" />
              </ListItem>
            {/* </Link> */}
            <Divider />

            {/* <Link to='/PayStatus'> */}
              <ListItem button>
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
        {/* <Stepper activeStep={activeStep} alternativeLabel className="stepper">
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper> */}
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
                  Check Payment Status
                </Typography>
              </Grid>
                <div className="card">
                    <Grid xs={12}>
                        <div className="cardSm">
                        <Grid xs={12}>
                        <Radio
                            checked={this.state.selectedValue === 'c'}
                            onChange={this.handleChange}
                            value="c"
                            name="radio-button-demo"
                            aria-label="C"
                            classes={{
                            root: classes.rootCheckBox,
                            checked: classes.checked,
                            }}
                        /> 
                        <span className="radioTxt">Transaction Reference ID</span>

                        <Radio
                            checked={this.state.selectedValue === ''}
                            onChange={this.handleChange}
                            value="c"
                            name="radio-button-demo"
                            aria-label="C"
                            classes={{
                            root: classes.rootCheckBox,
                            checked: classes.checked,
                            }}
                        /> 
                        <span className="radioTxt">Mobile Number</span>
                        </Grid>
                        </div>    
                    </Grid>

                </div>

                <div className="card">
                <Grid xs={4}>
                  <Typography component="p">
                    <FormControl className="formControl">
                      <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                        Transaction Reference ID*
                      </InputLabel>
                      <TextField
                          id="standard-name"
                          className="textField"
                          value="CC01HA171921"
                          onChange={this.handleChange('name')}
                          margin="normal"
                        />
                    </FormControl>
                    </Typography>
                </Grid>
                  
                  <Grid xs={4} className="btnCS">
                    <Button className="btnGeneral" disabled>Check Status</Button>
                  </Grid>
                </div>
            </Paper>

            <Paper elevation={1} className="paper">
              <Grid xs={12}>
                <Typography variant="h5" component="h3" className="mainHeader">
                  Payment Tracking
                </Typography>
              </Grid>

              <div className="card">
                <Grid xs={4}>
                  <Typography component="p">
                    <FormControl className="formControl">
                      <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                      Transaction Reference ID
                      </InputLabel>
                      <TextField
                          id="standard-name"
                          className="textField"
                          value="CC01HA171921"
                          onChange={this.handleChange('name')}
                          margin="normal"
                        />
                    </FormControl>
                    </Typography>
                </Grid>

                <Grid xs={4}>
                  <Typography component="p">
                    <FormControl className="formControl">
                      <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                        Transaction Date
                      </InputLabel>
                      <TextField
                          id="standard-name"
                          className="textField"
                          value="2016-07-01"
                          onChange={this.handleChange('name')}
                          margin="normal"
                        />
                    </FormControl>
                    </Typography>
                </Grid>

                <Grid xs={4}>
                  <Typography component="p">
                    <FormControl className="formControl">
                      <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                      Transaction Status
                      </InputLabel>
                      <TextField
                          id="standard-name"
                          className="textField"
                          value="Successful"
                          onChange={this.handleChange('name')}
                          margin="normal"
                        />
                    </FormControl>
                    </Typography>
                </Grid>
              </div>

              <div className="card">
                <Grid xs={4}>
                  <Typography component="p">
                    <FormControl className="formControl">
                      <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                      Biller Name
                      </InputLabel>
                      <TextField
                          id="standard-name"
                          className="textField"
                          value="OTNS"
                          onChange={this.handleChange('name')}
                          margin="normal"
                        />
                    </FormControl>
                    </Typography>
                </Grid>

                <Grid xs={4}>
                  <Typography component="p">
                    <FormControl className="formControl">
                      <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                      Agent ID
                      </InputLabel>
                      <TextField
                          id="standard-name"
                          className="textField"
                          value="CC01CC01513515340681"
                          onChange={this.handleChange('name')}
                          margin="normal"
                        />
                    </FormControl>
                    </Typography>
                </Grid>

                <Grid xs={4}>
                  <Typography component="p">
                    <FormControl className="formControl">
                      <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                      Amount
                      </InputLabel>
                      <TextField
                          id="standard-name"
                          className="textField"
                          value="1000.00"
                          onChange={this.handleChange('name')}
                          margin="normal"
                        />
                    </FormControl>
                    </Typography>
                </Grid>
              </div>
            </Paper>
        </Grid>
      </div>
    );
  }
}

PayStatus.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PayStatus);