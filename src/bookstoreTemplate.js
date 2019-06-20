import React from 'react';

function BookstoreTemplate(props) {
    return (
        <div>
            <label>{props.name}</label>
            <label>{props.address}</label>
            <img src={props.imageurl} alt="default"/>
            <button onClick={props.edit}>Edit</button>
            <button onClick={props.deleteStore}>Delete</button>
        </div>
    )
}

export default BookstoreTemplate;