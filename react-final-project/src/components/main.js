import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './home';
import About from './about';
import Contact from './contact';
 import Books from './books';
 import Stores from './stores';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/books" component={Books} />
    <Route path="/stores" component={Stores} />
  </Switch>
)

export default Main;
