import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RC from './containers/RegisterComplaint';
import PB from './containers/PayBill';
import CS from './containers/ComplainStatus';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <React.Fragment>
        <Router>
            <Switch>
                <Route exact={true} path="/" component={App} />
                <Route path="/PayBill" component={PB} />
                <Route path="/RegisterComplaint" component={RC} />
                <Route path="/ComplaintStatus" component={CS} />
            </Switch>
        </Router>
       {/*  <App/> */}
    </React.Fragment>
    ,document.getElementById('root')
);

serviceWorker.unregister();