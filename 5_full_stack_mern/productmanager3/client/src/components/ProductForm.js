import React, { useState } from 'react';
import axios from 'axios';
const ProductForm = () => {
    
    // preserve inputs using state hooks
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const submitHandler = event => {
        // prevent fields from clearing by default
        event.preventDefault();

        // axios API call to create new product
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
        .then(res=>{console.log(res);
        setTitle("");
        setPrice(0);
        setDescription("");
        window.location.reload();
        })
            .catch(err=>console.log(err))
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