import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CheckOut.css';
import { CheckoutContext, DataContext, ProductContext, UserContext } from '../../App';

const CheckOut = () => {

    const [checkout, setCheckout] = useContext(CheckoutContext);
    const [products, setProducts] = useContext(ProductContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [cart, setCart] = useState({})

    let name, price, imageUrl;

    if (loggedInUser.name) {

        const productItems = products.filter(item => item._id == checkout)
        name = productItems[0].productName;
        price = productItems[0].price;
    }




    return (
        <div className="tableField">
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-secondary">
                        <td>{name}</td>
                        <td>1</td>
                        <td>${price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CheckOut;