import React from 'react';
import Axios from 'axios';
import BookstoreRender from './bookstoreTemplate';
import AddStoreForm from './addStoreForm';

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

    componentDidMount() {
        this.dataB();
    }

    // Will send input data to database
    dataB = () => {
        Axios.get('http://localhost:3000/bookstores')
            .then((response) => {
                this.setState({
                    bookstores: response.data
                });
                //console.log(response);
                //console.log(bookstores);
                console.log('got this:');
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }

    // Will take info from form and send it to the database
    formPost = () => {
        let form = document.getElementById('theForm');
        console.log(form);
        let data = {
            name: form.childNodes[0].value,
            address: form.childNodes[1].value,
            imageurl: form.childNodes[2].value,
        };
        console.log(data);
        Axios.post('http://localhost:3000/bookstores', data)
            .then((response) => {
                console.log(response);
                this.dataB();

            })
            .catch(function (error) {
                //Error Text
                console.log(error);
            })
    }

    render() {
        const info = this.state.bookstores.map(store => <BookstoreRender name={store.name} address={store.address} imageurl={store.imageurl} />)
        console.log(info);
        const form = this.handleDisplayValue ? <AddStoreForm dataB={this.dataB} formPost={this.formPost} /> : null;
        return (
            <div>
                <h1>Test</h1>
                {/* {this.dataB} */}
                {info}
                {/* <button onClick={this.handleDisplayValue}>Test</button> */}
                <br></br>
                {form}
                {/* {addStoreForm()} */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Test;
