import React, { useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const ProductList = (props) => {
    const [product, setProduct] = useState([]);
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId);
            })
    }

    return (
        <div>
            {props.product.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/" + product._id} style={{ paddingRight: "10px" }}>{product.title}</Link>
                    <Link to={"/" + product._id + "/edit"} style={{ paddingRight: "10px" }}>Edit</Link>
                    <button onClick={(event) => {deleteProduct(product._id)}}>Delete</button>                    
                    </p>
            })}
        </div>
    )
}

export default ProductList;