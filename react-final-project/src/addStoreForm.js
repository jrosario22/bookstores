import React from 'react';

// Form
function AddStoreForm(props){
    // onSubmit={props.formPost}
    return (
        //action="http://localhost:3000/campus"
        
        <div id="storeForm">
            <input type="text" name="name" placeholder="name" value="Test" />
            <input type="text" name="address" placeholder="address" value="test" />
            <input type="text" name="imageurl" placeholder="imageurl" value="https://www.welikela.com/wp-content/uploads/2016/01/last-bookstore-book-display.jpg" />
            {/* <label>{props.id}</label> */}
            <button onClick={props.addStore}>Click</button> 
            {/* <input type="submit" onClick={this.dataB()} /> */}
        </div>
    )
}

export default AddStoreForm;