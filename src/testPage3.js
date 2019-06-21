import React from 'react';
import axios from 'axios';
import Results from './results';
import SearchTemplate from './searchTemplate';

class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props, info: [] }; //Tag for search
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.search = this.search.bind(this);
    }

    //For when input is being placed
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    //For when search field is empty 
    handleSubmit(event) {
        event.preventDefault();
    }

    search = () => {
        axios.get('http://api.giphy.com/v1/gifs/search?q='+ this.state.value +'&AIzaSyCHb-efm7ka_NzOvzMpVjdnO__XtrOXI9k')
            .then(response => {
                console.log(response)
                this.setState({
                    info: response
                });
            })
            .catch(err => { console.log(err) })
    }

    render() {
        const results = this.state.imageurl.map( (i) =><SearchTemplate i={i}/> )
        return (
            <div>
                <h2>Search for a gif:</h2>
                <input type="search" placeholder="Search" onChange={this.handleChange}></input>
                <input type="submit" onClick={this.search}></input>
                <br></br>
                {results}
            </div>
        )
    }
}

export default Regular;