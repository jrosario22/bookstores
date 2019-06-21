import React from 'react';

function BookstoreTemplate(props) {
    console.log(props);
    function deleteSelf() {
        props.deleteStore(props.id);
    }
    return (
        <div id="bookTemplate">
            <label>{props.name}</label>
            <label>{props.address}</label>
            <img src={props.imageurl} alt="default"/>
            <button onClick={deleteSelf}>Delete {props.id}</button>
        </div>
    )
}

export default BookstoreTemplate;