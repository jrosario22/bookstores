import React from 'react';

function BookstoreRender(props) {
    return (
        <div>
            <label>{props.name}</label>
            <label>{props.address}</label>
            <img src={props.imageurl} alt="default"/>
            {/* //edit button
            // delete button */}
        </div>
    )
}

export default BookstoreRender;