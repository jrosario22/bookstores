import React from 'react';
import Axios from 'axios';
import AddBookForm from '../addBookForm';
import BookTemplate from '../bookTemplate';

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = { books: [], displayForm: false, id: ''};
    }

    // Will hide form until add campus is pressed
    handleDisplayValue = () => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    componentDidMount() {
        this.displayBookData();
    }

    // Will send input data to database
    displayBookData = () => {
        Axios.get('http://localhost:3002/books')
            .then((response) => {
                this.setState({
                    books: response.data
                });
                console.log('got this:');
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }

    // Will take info from form and send it to the database
    addBook = () => {
        let bookForm = document.getElementById('bookForm');
        console.log(bookForm);
        let data = {
            ibsn: bookForm.childNodes[0].value,
            title: bookForm.childNodes[1].value,
            author: bookForm.childNodes[2].value,
            category: bookForm.childNodes[3].value,
            imageurl: bookForm.childNodes[4].value
        };
        console.log(data);
        Axios.post('http://localhost:3002/books', data)
            .then((response) => {
                console.log(response);
                this.displayBookData();
            })
            .catch(err => console.log(err))
    }

    deleteBook = () => {
        console.log("delete pressed");
        Axios.delete('http://localhost:3002/bookstores')
            .then(response => {
                console.log("info was deleted")
                // this.setState({
                //     bookstores: response
                // })
            })
            .catch(err => console.log(err))
    }

    render() {
        const bookInfo = this.state.books.map(book => <BookTemplate ibsn={book.ibsn} title={book.title} author={book.author} category={book.category} imageurl={book.imageurl} />)
        console.log(bookInfo);
        const bookForm = this.handleDisplayValue ? <AddBookForm displayBookData={this.displayBookData} addBook={this.addBook} /> : null;
        return (
            <div>
                <h1>Books Info</h1>
                {/* {this.dataB} */}
                {bookInfo}
                <br></br>
                {bookForm}
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Books;
