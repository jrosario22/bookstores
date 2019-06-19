import React from 'react';

function BookstoreRender(props) {
    return (
        <div>
            <label>{props.data.i.name}</label>
            <label>{props.data.i.address}</label>
            <img src={props.data.i.imageurl} alt="default"/>
        </div>
    )
}

export default BookstoreRender;