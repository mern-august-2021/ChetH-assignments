import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const ProductList = (props) => {
    const [product, setProduct] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProduct(res.data));
    }, [])
    return (
        <div>
            {props.product.map((product, idx) => {
                return <p key={idx}><Link to={"/" + product._id}>{product.title}</Link></p>
            })}
        </div>
    )
}

export default ProductList;