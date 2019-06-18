import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Test from './testPage'

const homePage = (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/testPage">Test</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/testPage" component={Test} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(homePage, document.getElementById('root'));