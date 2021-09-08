import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProduct(res.data));
    },[])

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
                    <DeleteButton productId={ product._id } successCallback={()=>removeFromDom(product._id)}/>                    
                    </p>
            })}
        </div>
    )
}

export default ProductList;