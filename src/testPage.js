import React from 'react';
import Axios from 'axios';


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

    // Will mount the form onto the screen after add campus is pressed
    componentDidMount() {
        Axios.get('http://localhost:3000/bookstores')
            .then((response) => {
                // console.log("did get request")
                // console.log(response)
                this.setState({
                    bookstores: response
                })
            })
            .catch(err => console.log(err));
    }

    // Will take info from form and send it to the database
    formPost = (event) => {
        event.preventDefault();
        console.log(event.target);
        // let data = {
        //     name: event.target[0],
        //     address: event.target[1],
        //     phone_number: event.target[2],
        // };
        Axios.post('http://localhost:3000/bookstores')
            .then((response) => {
                //console.log(data);
                this.setState({
                    data: response
                });
                console.log(response);
                console.log("Response worked");
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
            console.log(res)
        })
        .catch(err => {})
    }
    render() {
        return (
            <div>
                <h1>Test</h1>
                <button onClick={this.handleDisplayValue}>Test</button>
                <br></br>
                {this.renderForm()}
                <br></br>

            </div>
        )
    }
}

export default Test;
