import React, { useState } from 'react';
import axios from 'axios';
const ProductForm = (props) => {
    
    // preserve inputs using state hooks
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const submitHandler = event => {
        // prevent fields from clearing by default
        event.preventDefault();
        onSubmitProp({ title, price, description });
    }

    return (
        <form onSubmit={submitHandler}>
            <p>
                <label>Title:</label>
                <input type="text" value={title} onChange = {(event)=>setTitle(event.target.value)}/>
            </p>
            <p>
                <label>Price:</label>
                <input type="number" step="0.01" value={price} onChange = {(event)=>setPrice(event.target.value)}/>
            </p>
            <p>
                <label>Description:</label>
                <input type="text" value={description} onChange = {(event)=>setDescription(event.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;