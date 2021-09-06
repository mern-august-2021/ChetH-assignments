import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Detail = (props) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    },[])
    return (
        <div>
        <p>Product title: {product.title}</p>
        <p>Product price: {product.price}</p>
        <p>Product description: {product.description}</p>
        </div>
    )
}
export default Detail;