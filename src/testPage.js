import React from 'react';
import Axios from 'axios';
import BookstoreRender from './bookstoreRender';


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bookstores: [], displayForm: false };
    }

    // Will hide form until add campus is pressed
    handleDisplayValue = () => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    // Mounts the form onto the screen after add campus is pressed
    // Will send input data to database
    dataB = () => {
        Axios.get('http://localhost:3000/bookstores')
            .then((response) => {
                this.setState({
                    bookstores: response.data
                })
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }

    // Will take info from form and send it to the database
    formPost = (event) => {
        event.preventDefault();         // Stops page refresh after submit
        console.log(event.target);
        let data = {
            name: event.target[0].value,
            address: event.target[1].value,
            imageurl: event.target[2].value,
        };
        console.log(data);
        Axios.post('http://localhost:3000/bookstores', data)
            .then((response) => {
                //console.log(data);
                this.setState({
                    data: response
                });
            })
            .catch(function (error) {
                //Error Text
            })
    }

    // Form
    renderForm = () => {
        if (this.state.displayForm === true) {
            return (
                //action="http://localhost:3000/campus"
                <form method="post"  onSubmit={this.formPost}>
                    <input type="text" name="name" placeholder="name" value="Test" />
                    <input type="text" name="address" placeholder="address" value="test" />
                    <input type="text" name="imageurl" placeholder="imageurl" value="https://www.welikela.com/wp-content/uploads/2016/01/last-bookstore-book-display.jpg" />
                    <input type="submit" />
                </form>
            )
        } else {
            return null
        }
    }

    results = () => {
        Axios.get("http://localhost:3000/bookstores")
        .then(res => {
            //console.log(res)
        })
        .catch(err => {})
    }
    render() {
        const info = this.state.bookstores.map( (i) =><BookstoreRender i={i}/> )
        return (
            <div>
                <h1>Test</h1>
                {this.dataB}
                <button onClick={this.handleDisplayValue}>Test</button>
                <br></br>
                {info}
                <br></br>
                {this.renderForm()}
            </div>
        )
    }
}

export default Test;
