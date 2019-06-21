import React from 'react';

function SearchTemplate(props) {
    return (
        <div>
            <label>{props.ibsn}</label>
            <label>{props.title}</label>
            <label>{props.author}</label>
            <label>{props.category}</label>
        </div>
    )
}

export default SearchTemplate;