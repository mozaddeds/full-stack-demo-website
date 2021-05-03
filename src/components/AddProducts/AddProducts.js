import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProducts.css';

const AddProducts = () => {

    const [imageUrl, setImageUrl] = useState(null);

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const productData = {
            productName: data.name,
            price: data.price,
            imageUrl: imageUrl
        }

        const url = 'https://fierce-springs-42114.herokuapp.com/addproduct';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
    }

    const handleImageUpload = event => {

        const imgData = new FormData();
        imgData.set('key', '6f8808a65ad91ffdaa2d9e7caafc9336');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
    }

    return (
        <div className="inputField">
            <h2>Add Your Products Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="dataField d-flex flex-column">
                    <input name="name" placeholder="Product Name" ref={register} />
                    <input name="price" placeholder="Product Price" ref={register} />
                    <input name="image" type="file" onChange={handleImageUpload} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProducts;