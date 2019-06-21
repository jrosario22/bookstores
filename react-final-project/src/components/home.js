import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Home extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="home-gridbody">
          <Cell col={12}>
            <img
              className="book-img"
              src="https://www.qualtrics.com/blog/wp-content/uploads/2018/08/shutterstock_1068141515.jpg"
              alt="book"/>

            <div className="follow-page">
              <h1>follow us below</h1>



        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          



        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;
