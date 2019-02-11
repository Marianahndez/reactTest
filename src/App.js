import React, { Component } from 'react';
import './assets/styles/App.scss';
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
import ImgLogo from './assets/img/logobbps.svg';
import LogoBA from './assets/img/Machnet.png';
import Fab from '@material-ui/core/Fab';
import Done from '@material-ui/icons/Done';
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
  return ['Select Biller', 'Fetch Bill', 'Pay Bill'];
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
             {/*  <Link to='/PayBill'> */}
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

        <Grid xs ={12} className="Appheader PB">
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
                Select Biller
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
                    <MenuItem value={1123}><em>Please Select</em></MenuItem>
                    <MenuItem value={10}>Broadband Postpaid</MenuItem>
                    <MenuItem value={20}>DTH</MenuItem>
                    <MenuItem value={30}>Electricity</MenuItem>
                    <MenuItem value={100}>Gas</MenuItem>
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
                    {/* <MenuItem value={1}>Please Select</MenuItem>
                    <MenuItem value={2}>ACT Fibernet</MenuItem>
                    <MenuItem value={3}>Airtel Broadband</MenuItem>
                    <MenuItem value={4}>Airtel Broadband (Fetch & Pay)</MenuItem>
                    <MenuItem value={5}>Connect Broadband</MenuItem>
                    <MenuItem value={6}>Hathway Broadband</MenuItem>
                    <MenuItem value={7}>Nextra Broadband</MenuItem>
                    <MenuItem value={8}>Spectranet Broadband</MenuItem>
                    <MenuItem value={9}>TTN BroadBand</MenuItem>
                    <MenuItem value={10}>Tikona Digital Networks Private Limited</MenuItem> */}

                    {/* <MenuItem value={1}>Please Select</MenuItem>
                    <MenuItem value={1}>Dish TV</MenuItem>
                    <MenuItem value={1}>Sun Direct TV</MenuItem>
                    <MenuItem value={1}>Sun Direct TV (With Validation)</MenuItem>
                    <MenuItem value={1}>Tata Sky</MenuItem>
                    <MenuItem value={1}>Videocon D2H</MenuItem> */}


                  {/*   <MenuItem value={1}></MenuItem>
                    <MenuItem value={1}></MenuItem>
                    <MenuItem value={1}></MenuItem>
                    <MenuItem value={1}></MenuItem>
                    <MenuItem value={1}></MenuItem>
                    <MenuItem value={1}></MenuItem>
                    <MenuItem value={1}></MenuItem>
                    <MenuItem value={1}></MenuItem>
                    <MenuItem value={1}></MenuItem>
                    <MenuItem value={1}></MenuItem>
                    <MenuItem value={1}></MenuItem>
                    <MenuItem value={1}></MenuItem> */}

                    {/* <MenuItem value={1}><em>Please Select</em></MenuItem>
                    <MenuItem value={5}>APEPDCL-Eastern Power Distribution CO AP Ltd</MenuItem>
                    <MenuItem value={10}>APSPDCL-Southern Power Distribution CO AP Ltd</MenuItem>
                    <MenuItem value={123}>Adani Gas</MenuItem>
                    <MenuItem value={30}>Adani Electricity Mumbai Limited - Old</MenuItem>
                    <MenuItem value={40}>Ajmer Vidyut Vitran Nigam Limited (AVVNL)</MenuItem>
                    <MenuItem value={50}>Assam Power Distribution Company Ltd (NON-RAPDR)</MenuItem>
                    <MenuItem value={60}>Assam Power Distribution Company Ltd (RAPDR)</MenuItem>
                    <MenuItem value={70}>B.E.S.T Mumbai</MenuItem>
                    <MenuItem value={52}>BSES Rajdhani Power Limited</MenuItem>
                    <MenuItem value={80}>BSES Yamuna Power Limited</MenuItem>
                    <MenuItem value={13}>Bangalore Electricity Supply Co. Ltd (BESCOM)</MenuItem>
                    <MenuItem value={112}>Bharatpur Electricity Services Ltd. (BESL)</MenuItem>
                    <MenuItem value={132}>Bharatpur Electricity Services Ltd. (BESL) - Old</MenuItem>
                    <MenuItem value={165}>Bikaner Electricity Supply Limited (BkESL)</MenuItem>
                    <MenuItem value={187}>Bikaner Electricity Supply Limited (BkESL) - Old</MenuItem>
                    <MenuItem value={145}>Calcutta Electric Supply Corporation (CESC)</MenuItem>
                    <MenuItem value={134}>Chamundeshwari Electricity Supply Corp Ltd (CESCOM)</MenuItem>
                    <MenuItem value={167}>Chhattisgarh State Power Distribution Co. Ltd</MenuItem>
                    <MenuItem value={1223}>DNH Power Distribution Company Limited</MenuItem>
                    <MenuItem value={41}>Dakshin Gujarat Vij Company Limited (DGVCL)</MenuItem>
                    <MenuItem value={2341}>Dakshin Haryana Bijli Vitran Nigam (DHBVN)</MenuItem>
                    <MenuItem value={541}>Daman and Diu Electricity</MenuItem>
                    <MenuItem value={4561}>Gulbarga Electricity Supply Company Limited</MenuItem>
                    <MenuItem value={71}>Himachal Pradesh State Electricity Board</MenuItem>
                    <MenuItem value={561}>Hubli Electricity Supply Company Ltd (HESCOM)</MenuItem>
                    <MenuItem value={231}>Jaipur Vidyut Vitran Nigam (JVVNL)</MenuItem>
                    <MenuItem value={2341}>Jamshedpur Utilities</MenuItem>
                    <MenuItem value={1771}>Jharkhand Bijli Vitran Nigam Limited (JBVNL)</MenuItem>
                    <MenuItem value={1087}>Jodhpur Vidyut Vitran Nigam Limited (JDVVNL)</MenuItem>
                    <MenuItem value={123234}>Kanpur Electricity Supply Company</MenuItem>
                    <MenuItem value={2}>Kota Electricity Distribution Limited (KEDL)</MenuItem>
                    <MenuItem value={3}>Kota Electricity Distribution Limited (KEDL) - Old</MenuItem>
                    <MenuItem value={4}>M.P. Madhya Kshetra Vidyut Vitaran - RURAL</MenuItem>
                    <MenuItem value={5}>M.P. Madhya Kshetra Vidyut Vitaran - URBAN</MenuItem>
                    <MenuItem value={6}>M.P. Poorv Kshetra Vidyut Vitaran - RURAL</MenuItem>
                    <MenuItem value={7}>M.P. Poorv Kshetra Vidyut Vitaran - URBAN</MenuItem>
                    <MenuItem value={8}>Madhya Gujarat Vij Company Limited (MGVCL)</MenuItem>
                    <MenuItem value={9}>Maharashtra State Electricity Distbn Co Ltd</MenuItem>
                    <MenuItem value={45}>Meghalaya Power Dist Corp Ltd</MenuItem>
                    <MenuItem value={3234}>NESCO, Odisha</MenuItem>
                    <MenuItem value={21}>New Delhi Municipal Council (NDMC) - Electricity</MenuItem>
                    <MenuItem value={22}>North Bihar Power Distribution Company Ltd.</MenuItem>
                    <MenuItem value={23}>Paschim Gujarat Vij Company Limited (PGVCL)</MenuItem>
                    <MenuItem value={24}>Punjab State Power Corporation Ltd (PSPCL)</MenuItem>
                    <MenuItem value={25}>SNDL Nagpur</MenuItem>
                    <MenuItem value={26}>SOUTHCO, Odisha</MenuItem>
                    <MenuItem value={27}>Sikkim Power - RURAL</MenuItem>
                    <MenuItem value={28}>South Bihar Power Distribution Company Ltd.</MenuItem>
                    <MenuItem value={29}>TP Ajmer Distribution Ltd (TPADL)</MenuItem>
                    <MenuItem value={30}>TP Ajmer Distribution Ltd (TPADL) - Old</MenuItem>
                    <MenuItem value={31}>Tamil Nadu Electricity Board (TNEB)</MenuItem>
                    <MenuItem value={32}>Tata Power - Delhi</MenuItem>
                    <MenuItem value={33}>Tata Power - Mumbai</MenuItem>
                    <MenuItem value={34}>Torrent Power - Agra</MenuItem>
                    <MenuItem value={35}>Torrent Power - Ahmedabad</MenuItem>
                    <MenuItem value={36}>Torrent Power - Bhiwandi</MenuItem>
                    <MenuItem value={37}>Torrent Power - Surat</MenuItem>
                    <MenuItem value={38}>Tripura Electricity Corp Ltd</MenuItem>
                    <MenuItem value={39}>Uttar Gujarat Vij Company Limited (UGVCL)</MenuItem>
                    <MenuItem value={40}>Uttar Haryana Bijli Vitran Nigam (UHBVN)</MenuItem>
                    <MenuItem value={41}>Uttar Pradesh Power Corp Ltd (UPPCL) - RURAL</MenuItem>
                    <MenuItem value={42}>Uttar Pradesh Power Corp Ltd (UPPCL) - URBAN</MenuItem>
                    <MenuItem value={43}>Uttarakhand Power Corporation Limited</MenuItem>
                    <MenuItem value={44}>WESCO Utility</MenuItem>
                    <MenuItem value={45}>West Bengal State Electricity Distribution Co. Ltd (WBSEDCL)</MenuItem>
                    */}

                    <MenuItem value={100}>Please Select</MenuItem>
                    <MenuItem value={2}>Aavantika Gas Ltd.</MenuItem>
                    <MenuItem value={1}>OTME</MenuItem>
                    <MenuItem value={4}>Central U.P. Gas Limited</MenuItem>
                    <MenuItem value={5}>Charotar Gas Sahakari Mandali Ltd</MenuItem>
                    <MenuItem value={6}>Gail Gas Limited</MenuItem>
                    <MenuItem value={7}>Gujarat Gas Limited</MenuItem>
                    <MenuItem value={8}>Haryana City Gas - Kapil Chopra Enterprise</MenuItem>
                    <MenuItem value={9}>Haryana City Gas - Kapil Chopra Enterprise - Old</MenuItem>
                    <MenuItem value={10}>Indian Oil-Adani Gas Private Limited</MenuItem>
                    <MenuItem value={11}>Indraprastha Gas</MenuItem>
                    <MenuItem value={12}>Mahanagar Gas Limited</MenuItem>
                    <MenuItem value={13}>Maharashtra Natural Gas Limited (MNGL)</MenuItem>
                    <MenuItem value={14}>Maharashtra Natural Gas Limited (MNGL) - Old</MenuItem>
                    <MenuItem value={15}>Sabarmati Gas Limited (SGL)</MenuItem>
                    <MenuItem value={16}>Siti Energy - Uttar Pradesh</MenuItem>
                    <MenuItem value={17}>Tripura Natural Gas</MenuItem>
                    <MenuItem value={18}>Unique Central Piped Gases Pvt Ltd (UCPGPL)</MenuItem>
                    <MenuItem value={19}>Vadodara Gas Limited</MenuItem>

                  </Select>              
                    
                </FormControl>
                </Typography>
              </Grid>
            </div>
            </Paper>

            <Paper elevation={1} className="paper PB">
              <Grid xs={12}>
                <Typography variant="h5" component="h3" className="tittleSec">
                  Fetch Bill
                </Typography>
              </Grid>

              <div className="card">
                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Mobile Number*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="9898990084"
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
                      value=" "
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    a*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="10"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    a b*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="20"
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
                    a b c*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="30"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    a b c d*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="40"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    a b c d e*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="50"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3} className="left buttonsArea">
                  <Button className="btnGeneral" disabled>Fetch Bill</Button>
                </Grid>
              </div>

          </Paper>

          <Paper elevation={1} className="paper PB">
          <Grid xs={12}>
                <Typography variant="h5" component="h3" className="tittleSec">
                Bill Information
                </Typography>
              </Grid>
            <div className="card">
                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Customer Name
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="BBPS"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Biller Name
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="OTME"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Bill Date
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="2015-06-14"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Bill Number
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="12303"
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
                    Bill Period
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="june"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Due Date
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="2015-06-20"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Bill Amount
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="1000"
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
                      value="Internet"
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
                    Payment Modes*
                    </InputLabel>
                    <Select
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    className="SelectMain"
                    input={<Input name="age" id="age-native-label-placeholder" />}
                  >
                    <MenuItem value={100}><em>Select Payment mode</em></MenuItem>
                    <MenuItem value={10}>Broadband Postpaid</MenuItem>
                    <MenuItem value={20}>DTH</MenuItem>
                    <MenuItem value={30}>Electricity</MenuItem>
                    <MenuItem value={1}>Cash</MenuItem>
                    <MenuItem value={50}>Landline Postpaid</MenuItem>
                    <MenuItem value={60}>Mobile Postpaid</MenuItem>
                    <MenuItem value={70}>Water</MenuItem>
                  </Select>
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Amount Option*
                    </InputLabel>
                    <Select
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    className="SelectMain"
                    input={<Input name="age" id="age-native-label-placeholder" />}
                  >
                    <MenuItem value={1}>Bill Amount (1000.00) = 1000.00</MenuItem>
                    <MenuItem value={10}>Broadband Postpaid</MenuItem>
                    <MenuItem value={20}>DTH</MenuItem>
                    <MenuItem value={30}>Electricity</MenuItem>
                    <MenuItem value={122}>Gas</MenuItem>
                    <MenuItem value={50}>Landline Postpaid</MenuItem>
                    <MenuItem value={60}>Mobile Postpaid</MenuItem>
                    <MenuItem value={70}>Water</MenuItem>
                  </Select>
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Payment Amount*
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="1000.00"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>

                <Grid xs={3}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    CCF + Tax(es)
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="0.00"
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
                    Net Payable Amount
                    </InputLabel>
                    <TextField
                      id="standard-name"
                      className="textField"
                      value="1000.00"
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </form>
                </Grid>
              </div>


              <div className="card">
                  <Grid xs={12} className="left buttonsArea">
                    <Button className="btnGeneral" disabled>Pay now</Button>
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
