import React from 'react';

const Summary = props => {
    return (
        <div>
        {
            isNaN(props.id)?
            <p>The word is {props.id}</p>
            :<p>The number is {props.id}</p>
        }
        </div>
    );
}

export default Summary;