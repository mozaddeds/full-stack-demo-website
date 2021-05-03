import React from 'react';
import './ProductList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = (props) => {
    const { productName, _id } = props.data

    const deleteProduct = id => {
        const url = `https://fierce-springs-42114.herokuapp.com/deleteproduct/${id}`;
        
        fetch(url, {
        method: 'DELETE',
        })
        .then(res => res.json())
    }

    return (
        <div className="productNameField d-flex justify-content-between my-3">
            <h5> <span className="productName py-3"> {productName} </span></h5>
            <button onClick={() => deleteProduct(_id)} className="btn btn-danger">Delete</button> 
        </div>
    );
};

export default ProductList;