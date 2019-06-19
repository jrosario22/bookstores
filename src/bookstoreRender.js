import React from 'react';

function BookstoreRender(props) {
    return (
        <div>
            <label>{props.name}</label>
            <label>{props.address}</label>
            <img src={props.imageurl} alt="default"/>
        </div>
    )
}

export default BookstoreRender;