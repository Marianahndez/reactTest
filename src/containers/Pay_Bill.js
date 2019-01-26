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
import ImgLogoBA from '../assets/img/LogoBillAvenue.svg';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

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

class PayBill extends Component {
  state = {
    age: '1',
    name: '',
    multiline: 'Controlled',
    currency: 'EUR',
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
    this.setState({ [name]: event.target.value });
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
              {/* <Link to='/PayBill'> */}
                <ListItem button selected>
                  <ListItemIcon className="iconmenu">
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText className="menutxt" primary="Pay Bill" />
                </ListItem>
              {/* </Link> */}
            <Divider />

            {/* <Link to='/RegisterComplaint'> */}
              <ListItem button >
                <ListItemIcon>
                  <Listalt />
                </ListItemIcon>
                <ListItemText className="menutxt" primary="Register Complaint" />
              </ListItem>
            {/* </Link> */}
            <Divider />

            {/* <Link to='/ComplaintStatus'> */}
              <ListItem button >
                <ListItemIcon>
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
              <img src={ImgLogoBA} className="logoBA" />
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

        <Grid xs ={12} className="Appheader appPay_Bill">

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

          <Paper elevation={1} className="paper papperup">
            <Grid xs={12}>
              <Typography variant="h5" component="h3" className="mainHeader">
                Pay Bill
              </Typography>
            </Grid>
            <div className="card">
            <Grid xs={4}>
                <Typography component="p">
                <FormControl className="formControl">
                  <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                    Biller Category
                  </InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    className="SelectMain"
                    input={<Input name="age" id="age-native-label-placeholder" />}
                  >
                    <MenuItem value={18}><em>Please Select</em></MenuItem>
                    <MenuItem value={10}>Broadband Postpaid</MenuItem>
                    <MenuItem value={20}>DTH</MenuItem>
                    <MenuItem value={30}>Electricity</MenuItem>
                    <MenuItem value={40}>Gas</MenuItem>
                    <MenuItem value={50}>Landline Postpaid</MenuItem>
                    <MenuItem value={1}>Mobile Postpaid</MenuItem>
                    <MenuItem value={70}>Water</MenuItem>
                  </Select>
                </FormControl>
                </Typography>
              </Grid>

              <Grid xs={4}>
                <Typography component="p">
                <FormControl className="formControl">
                  <InputLabel className="labelMain" shrink htmlFor="age-native-label-placeholder">
                    Biller
                  </InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    className="SelectMain"
                    input={<Input name="age" id="age-native-label-placeholder" />}
                  >
                    {/* <MenuItem value={51}><em>Please Select</em></MenuItem>
                    <MenuItem value={1}>Idea Postpaid</MenuItem>
                    <MenuItem value={10}>APSPDCL-Southern Power Distribution CO AP Ltd</MenuItem>
                    <MenuItem value={20}>Adani Electricity Mumbai Limited</MenuItem>
                    <MenuItem value={30}>Adani Electricity Mumbai Limited - Old</MenuItem>
                    <MenuItem value={40}>Ajmer Vidyut Vitran Nigam Limited (AVVNL)</MenuItem>
                    <MenuItem value={50}>Assam Power Distribution Company Ltd (NON-RAPDR)</MenuItem>
                    <MenuItem value={60}>Assam Power Distribution Company Ltd (RAPDR)</MenuItem>
                    <MenuItem value={70}>B.E.S.T Mumbai</MenuItem>
                    <MenuItem value={80}>BSES Yamuna Power Limited</MenuItem> */}

                    <MenuItem value={51}><em>Please Select</em></MenuItem>
                    <MenuItem value={11}>Airtel Postpaid</MenuItem>
                    <MenuItem value={10}>Airtel Postpaid (Fetch &amp; Pay)</MenuItem>
                    <MenuItem value={20}>BSNL Mobile Postpaid</MenuItem>
                    <MenuItem value={1}>Idea Postpaid</MenuItem>
                    <MenuItem value={40}>Jio Postpaid</MenuItem>
                    <MenuItem value={50}>Tata Docomo CDMA Mobile Postpaid</MenuItem>
                    <MenuItem value={60}>Tata Docomo GSM Mobile Postpaid</MenuItem>
                    <MenuItem value={70}>Vodafone Postpaid</MenuItem>
                  </Select>
                </FormControl>
                </Typography>
              </Grid>
            </div>
            </Paper>

            <Paper elevation={1} className="paper paperPay_Bill">
              <Grid xs={12}>
                <Typography variant="h5" component="h3" className="tittleSec">
                  My detail
                </Typography>
              </Grid>
              <div className="card">
                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Mobil Number*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="+91"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                      Email
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="email@example.com"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>
              </div>

              <Grid xs={12}>
                <Typography variant="h5" component="h3" className="tittleSec">
                    Consumer Detail
                </Typography>
              </Grid>

              <div className="card">
              <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Landline No. with STD code* 
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value=" "
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Payment Channel 
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value=" "
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Payment Modes
                    </InputLabel>
                    <Select
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    className="SelectMain"
                    input={<Input name="age" id="age-native-label-placeholder" />}
                  >
                    <MenuItem value={1}><em>Select Payment Mode</em></MenuItem>
                    <MenuItem value={10}>Internet Banking</MenuItem>
                  </Select>
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Quick Pay Amount
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="Enter Amount"
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
                    CCF + Tax(es)
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="Enter Amount"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Net Payable Amount
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="Enter Amount"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={6} className="buttonsArea">
                  <Button className="btnGeneral" disabled>Quick Pay</Button>
                </Grid>
              </div>
          </Paper>
        </Grid>
      </div>
    );
  }
}

PayBill.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PayBill);
