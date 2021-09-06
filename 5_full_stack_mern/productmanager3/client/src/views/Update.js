import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
}, []);

const updateProduct = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8000/api/product/' + id, {
        title,
        price,
        description})
        .then(res => console.log(res));
    }

return (
    <div>
        <h3>Update a Product</h3>
        <form onSubmit={updateProduct}>
            <p>
                <label>Title: </label><br/>
                <input type="text" name="title" value={title} onChange={(event) => { setTitle(event.target.value) }}/>
            </p>
            <p>
                <label>Price: </label><br/>
                <input type="number" step="0.01" name="price" value={price} onChange={(event) => { setPrice(event.target.value) }}/>
            </p>
            <p>
                <label>Description: </label><br/>
                <input type="text" name="description" value={description} onChange={(event) => { setDescription(event.target.value) }}/>
            </p>
            <input type="submit"/>
        </form>
    </div>
)
}
export default Update;