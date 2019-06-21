import React from 'react';

// Form
function AddBookForm(props){
    // onSubmit={props.formPost}
    return (
        //action="http://localhost:3000/campus"
        
        <div id="bookForm">
            <input type="text" name="ibsn" placeholder="ibsn" value="123456789" />
            <input type="text" name="title" placeholder="title" value="BookTest" />
            <input type="text" name="author" placeholder="author" value="booktest" />
            <input type="text" name="category" placeholder="category" value="booktest" />
            <input type="text" name="imageurl" placeholder="imageurl" value="https://www.petmd.com/sites/default/files/over-active-dog-211592482.jpg" />
            <button onClick={props.addBook}>Click</button> 
            {/* <input type="submit" onClick={this.dataB()} /> */}
        </div>
    )
}

export default AddBookForm;