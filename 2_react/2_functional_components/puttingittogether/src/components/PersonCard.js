import React, { useState } from 'react';
const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);
    
    const handleClick = () => {
        setAge(age + 1);
    }
    return (
        <div>
            <>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: { age } <button onClick={ handleClick }>Another orbit around sun</button></p>
            <p>Hair Color: { props.hairColor }</p>
            <hr></hr>
            </>
        </div>
    )
}
export default PersonCard;