import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import test1 from './containers/test1';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route exact={true} path="/" component={App} />
            <Route path="/test" component={test1} />
        </div>
    </Router>
    ,document.getElementById('root')
);

serviceWorker.unregister();