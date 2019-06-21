import React, { Component } from "react";
import '../CSS/Home.css';
export default class Home extends Component {

 
  state = {};
  render() {

    return (
      
      <main>
        <section id ="home">
          <div class="section-inner">
            <h1>The Book Store</h1>
          </div>
        </section>
        
        <section id="about">
          <div class="section-inner">
            <h2>About:</h2>
            <p>
              Library app that keeps track of bookstores in the bronx
              that will have records of all the books in the store with the 
              help of google API search. we analyze which books, categories sells
               the most.
            </p>
          </div>
        </section>

        <section id="contact">
          <div class="section-inner">
              <h2>Contact info</h2>
              <p>You can reach me at:</p>
              <ul>
                  <li><p>Email: davianfarquharson@yahoo.com</p></li>
                  
              </ul>
          </div>
        </section>
      </main>






    
      
    );
  }
}


