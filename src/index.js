import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Test from './testPage';
import Test2 from './testPage2';

const homePage = (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/testPage">Test</Link></li>
                <li><Link to="/testPage2">Test2</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/testPage" component={Test} />
                <Route path="/testPage2" component={Test2} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(homePage, document.getElementById('root'));