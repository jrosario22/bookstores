
  

import React, { Component } from 'react';
    //import logo from './logo.svg';
import './CSS/App.css';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Books from './Display/Books.js';
import Home from './Display/Home.js';
import About from './Display/About.js';
import Contact from './Display/Contact.js';
import Store from './Display/Store.js';

    
const MainMenu = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/books">
        <button>Books</button>
      </Link>
      <Link to="/store">
        <button>Store</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </nav>
  );
};

    class App extends Component {
      render() {
        
        return (
          <Router>
            <div className="App">
              <header className="App-header">
               
                <h1 className="App-title">Welcome to the Book Store</h1>
                <MainMenu />
              </header>
              <div>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/about" component={About} />
                <Route exact path="/books" component={Books} />
                <Route exact path="/store" component={Store} />
                <Route exact path="/contact" component={Contact} />
                
              </div>
            </div>
          </Router>
        );
      }
    }

    export default App;