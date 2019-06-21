import React from 'react';
import Axios from 'axios';
import AddStoreForm from './addStoreForm';
import BookstoreTemplate from './bookstoreTemplate';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bookstores: [], displayForm: false, id: [] };
    }

    // Will hide form until add campus is pressed
    handleDisplayValue = () => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    componentDidMount() {
        this.displayStoreData();
    }

    // Will send input data to database
    displayStoreData = () => {
        Axios.get('http://localhost:3000/bookstores')
            .then((response) => {
                this.setState({
                    bookstores: response.data
                });
                console.log('got this:');
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }

    // Will take info from form and send it to the database
    addStore = () => {
        let form = document.getElementById('storeForm');
        console.log(form);
        // let id = {id: };
        let data = {
            //id: form.childNodes[0].value,
            name: form.childNodes[0].value,
            address: form.childNodes[1].value,
            imageurl: form.childNodes[2].value,
            id: form.childNodes[3].value

        };
        console.log(data);
        Axios.post('http://localhost:3000/bookstores', data)
            .then((response) => {
                console.log(response);
                this.displayStoreData();
            })
            .catch(err => console.log(err))
    };


        deleteStore = (id) => {
            console.log("delete pressed");
            Axios.delete('http://localhost:3000/bookstores/'+id)
                .then(response => {
                    console.log("info was deleted")
                    // this.setState({
                    //     bookstores: response
                    // })
                    this.displayStoreData();
                })
                .catch(err => console.log(err))
        };

        render() {
            const storeInfo = this.state.bookstores.map(store => <BookstoreTemplate name={store.name} address={store.address} imageurl={store.imageurl} id={store.id} deleteStore={this.deleteStore} />)
            // console.log(storeInfo);
            const rendStore = this.handleDisplayValue ? <AddStoreForm displayStoreData={this.displayStoreData} addStore={this.addStore} /> : null;
            return (
                <div>
                    <h1>Test</h1>
                    {/* {this.dataB} */}
                    {storeInfo}
                    <br></br>
                    {rendStore}
                    <br></br>
                    <br></br>
                </div>
            )
        }
    }

    export default Test;
