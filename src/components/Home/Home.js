import React, { useContext, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckoutContext, DataContext, ProductContext, UserContext } from '../../App';
import { Link } from 'react-router-dom';


const Home = (props) => {

    const { productName, imageUrl, _id, price } = props.data

    const [order, setOrder] = useContext(DataContext)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [checkout, setCheckout] = useContext(CheckoutContext)
    const [products, setProducts] = useContext(ProductContext);

    const [cart, setCart] = useState({})

    const updateOrder = id => {

        const productItems = products.filter(item => item._id == id)
        setCheckout(id);

        if (loggedInUser.name) {

            const orderTime = new Date().toDateString("dd/mm/yyyy");
            const newCart = { ...productItems[0], ...loggedInUser, orderTime };
            delete newCart._id;
            setCart(newCart);

            fetch('https://fierce-springs-42114.herokuapp.com/orderedproducts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCart)
            })
                .then(res => res.json())

        }

    }

    return (
        <div>
            { !props ?
                <div class="spinner-grow" role="status">
                    <h2> <span className="mx-5"> Loading... </span> </h2>
                    <span className="visually-hidden mx-5"></span>
                </div> :
                <div className="carCard">
                    <div>
                        <img src={imageUrl} alt="" />
                        <h4>{productName}</h4>
                    </div>
                    <div className="cardFooter d-flex justify-content-around">
                        <h4>${price}</h4>
                        <Link to="/checkout"><button onClick={() => updateOrder(_id)} className="btn btn-success">BUY</button></Link>
                    </div>

                </div>}
        </div>
    );
};

export default Home;