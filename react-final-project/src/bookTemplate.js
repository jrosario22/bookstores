import React from 'react';

function BookTemplate(props) {
    return (
        <div>
            <label>{props.ibsn}</label>
            <label>{props.title}</label>
            <label>{props.author}</label>
            <label>{props.category}</label>
            <img src={props.imageurl} alt="default"/>
            <button onClick={props.edit}>Edit</button>
            <button onClick={props.deleteStore}>Delete</button>
        </div>
    )
}

export default BookTemplate;