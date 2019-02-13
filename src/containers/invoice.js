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
import Listalt from '@material-ui/icons/ListAlt';
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
import Radio from '@material-ui/core/Radio';
import ImgLogo from '../assets/img/logobbps.svg';
import LogoBA from '../assets/img/Machnet.png';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const drawerSize = 240;

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

 const styles = theme => ({
    table: {
        minWidth: 700,
        },
        row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
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

let id = 0;
function createData(name, calories, fat, carbs) {
  id += 1;
  return { id, name, calories, fat, carbs };
}

const rows = [
  createData('Transaction ID', 'CC01CC01513515340681', 'Due Date', '2016-07-30'),
  createData('Biller ID', 'OTME00005XXZ43','Customer Number', 9898990084),
  createData('Biller Name', 'OTME',  'Customer Name', 'Ashish',),
  createData('Bill Amount', '1000.00', 'Customer Convenience Fees', '0.00'),
  createData( 'Bill Number', 12303037, 'Total amount', '1000.00' ),
  createData('Bill Date', '2015-06-14','Initiating Channel', 'AGT' ),
  createData('Bill Period', 'Jul', 'Payment Mode', 'Cash'),
];

class invoicepage extends Component {
  state = {
    age: '1',
    name: '',
    multiline: 'Controlled',
    currency: 'EUR',
    selectedValue: 'c',
    activeStep:0,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

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

        <Grid xs ={12} className="Appheader">
          <Paper elevation={1} className="paper">
            <Grid xs={12}>
              <Typography variant="h5" component="h3" className="mainHeader flex">
                <Grid xs={6}>
                    Biller Recipt
                </Grid>
                <Grid xs={6} className="buttonsArea">
                  <Button className="btnGeneral" disabled>Print</Button>
                  <Button className="btnGeneral" disabled>Return</Button>
                </Grid>
              </Typography>
            </Grid>

            <div className="flex">
            <Grid xs={12} className="padd-recipt">

            <div className="flex infopadd">
              <Grid xs={6} >
                <img src={LogoBA} className="logoBAinvoice" />
                <Typography variant="h6" component="h6" className="BillerInfoData billinfo">
                      Biller: OTME00005XXZ43
                  </Typography>
              </Grid>
              <Grid xs={6} align="right" className="billinfo">

              <Typography variant="h6" component="h6" className="BillerInfoData">
                      Bill Period: Jul
                  </Typography>
              <Typography variant="h6" component="h6" className="BillerInfoData">
                      Bill Date: 2016-07-01
                  </Typography>

                  <Typography variant="h6" component="h6" className="BillerInfoData">
                      Due Date: 2016-07-30
                  </Typography>
              </Grid>
            </div>

            <div className="flex card-biller">
                <Grid xs={3}>
                  


                </Grid>
              </div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                        <TableRow>
                            <CustomTableCell>Biller Details</CustomTableCell>
                            <CustomTableCell className="noborder" align="right"></CustomTableCell>
                            <CustomTableCell className="noborder" align="left">Customer Details</CustomTableCell>
                            <CustomTableCell className="noborder" align="right"></CustomTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map(row => (
                            <TableRow className={classes.row} key={row.id}>
                            <CustomTableCell component="th" scope="row">
                                {row.name}
                            </CustomTableCell>
                            <CustomTableCell className="border-left" align="left">{row.calories}</CustomTableCell>
                            <CustomTableCell align="left">{row.fat}</CustomTableCell>
                            <CustomTableCell align="left">{row.carbs}</CustomTableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
            </div>
            
            </Paper>
        </Grid>
      </div>
    );
  }
}

invoicepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(invoicepage);
