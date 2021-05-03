import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DataContext, ProductContext, UserContext } from '../../App';
import './Orders.css';

const Orders = () => {

    const [products, setProducts] = useContext(ProductContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderData, setOrderData] = useState([])

    useEffect(() => {
        fetch('https://fierce-springs-42114.herokuapp.com/getorders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [])

    const history = useHistory();

    return (
        <div className="">
            <div className="tableField">
                <table className="table">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Item Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Order Time</th>
                            <th scope="col">Ordered By</th>
                        </tr>
                    </thead>

                    {
                        orderData.map(order =>
                            <tbody>
                                <tr className="table-secondary">
                                    <td>{order.productName}</td>
                                    <td>${order.price}</td>
                                    <td>{order.orderTime}</td>
                                    <td>{order.name}</td> 
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default Orders;


{/* <table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr> */}