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

class PayBill extends Component {
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
              <Link to='/PayBill'>
                <ListItem button selected>
                  <ListItemIcon className="iconmenu">
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText className="menutxt" primary="Pay Bill" />
                </ListItem>
              </Link>
            <Divider />

            <Link to='/RegisterComplaint'>
              <ListItem button >
                <ListItemIcon>
                  <Listalt />
                </ListItemIcon>
                <ListItemText className="menutxt" primary="Register Complaint" />
              </ListItem>
            </Link>
            <Divider />

            <Link to='/ComplaintStatus'>
              <ListItem button >
                <ListItemIcon>
                  <Error />
                </ListItemIcon>
                <ListItemText className="menutxt" primary="Complaint Status" />
              </ListItem>
            </Link>
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
              <Typography variant="h6" color="inherit" className="appbarmenu" noWrap>
                Paykii / BBPS
              </Typography>
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
                    <MenuItem value={11}><em>Please Select</em></MenuItem>
                    <MenuItem value={10}>Broadband Postpaid</MenuItem>
                    <MenuItem value={20}>DTH</MenuItem>
                    <MenuItem value={30}>Electricity</MenuItem>
                    <MenuItem value={1}>Gas</MenuItem>
                    <MenuItem value={50}>Landline Postpaid</MenuItem>
                    <MenuItem value={60}>Mobile Postpaid</MenuItem>
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
                    <MenuItem value={1}><em>Please Select</em></MenuItem>
                    <MenuItem value={5}>APEPDCL-Eastern Power Distribution CO AP Ltd</MenuItem>
                    <MenuItem value={10}>APSPDCL-Southern Power Distribution CO AP Ltd</MenuItem>
                    <MenuItem value={20}>Adani Electricity Mumbai Limited</MenuItem>
                    <MenuItem value={30}>Adani Electricity Mumbai Limited - Old</MenuItem>
                    <MenuItem value={40}>Ajmer Vidyut Vitran Nigam Limited (AVVNL)</MenuItem>
                    <MenuItem value={50}>Assam Power Distribution Company Ltd (NON-RAPDR)</MenuItem>
                    <MenuItem value={60}>Assam Power Distribution Company Ltd (RAPDR)</MenuItem>
                    <MenuItem value={70}>B.E.S.T Mumbai</MenuItem>
                    <MenuItem value={80}>BSES Yamuna Power Limited</MenuItem>
                  </Select>
                </FormControl>
                </Typography>
              </Grid>
            </div>
            </Paper>

            <Paper elevation={1} className="paper">
              <Grid xs={12}>
                <Typography variant="h5" component="h3" className="tittleSec">
                  My detail
                </Typography>
              </Grid>
              <div className="card">
                <Grid xs={4}>
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

                <Grid xs={4}>
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

              <div className="card">
              <Grid xs={4}>
                  <form className="formControl" noValidate autoComplete="off">
                    <InputLabel className="labelDetails" shrink htmlFor="age-native-label-placeholder">
                    Consumer ID*
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

                <Grid xs={8} className="buttonsArea">
                  <Button className="btnGeneral">Fetch Bill</Button>
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
