import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RC from './containers/RegisterComplaint';
import PB from './containers/PayBill';
import PBill from './containers/Pay_Bill';
import CS from './containers/ComplainStatus';
import RCT from './containers/RC_TR';
import RCA from './containers/RC_Agent';
import RCB from './containers/RC_Biller';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <React.Fragment>
        <Router>
            <Switch>
                <Route exact={true} path="/" component={App} />
                <Route path="/PayBill" component={PB} />
                <Route path="/Pay_Bill" component={PBill} />
                <Route path="/RegisterComplaint" component={RC} />
                <Route path="/ComplaintStatus" component={CS} />
                <Route path="/RC_Transaction" component={RCT} />
                <Route path="/RC_Agent" component={RCA} />
                <Route path="/RC_Biller" component={RCB} />
            </Switch>
        </Router>
       {/*  <App/> */}
    </React.Fragment>
    ,document.getElementById('root')
);

serviceWorker.unregister();