import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">The Book Store</Link>} scroll>
            <Navigation>

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/stores">Stores</Link>
                <Link to="/books">Books</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">The Book Store</Link>}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/stores">Stores</Link>
              <Link to="/books">Books</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
