import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import CheckOut from './components/CheckOut/CheckOut';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddProducts from './components/AddProducts/AddProducts';
import ProductList from './components/ProductList/ProductList';
import AdminBar from './components/AdminBar/AdminBar';



export const DataContext = createContext();
export const UserContext = createContext();
export const CheckoutContext = createContext();
export const ProductContext = createContext();

function App() {

  const [order, setOrder] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  const [products, setProducts] = useState([])
  const [checkout, setCheckout] = useState([])

  useEffect(() => {
    fetch('https://fierce-springs-42114.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  return (
    <DataContext.Provider value={[order, setOrder]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <CheckoutContext.Provider value={[checkout, setCheckout]}>
          <ProductContext.Provider value={[products, setProducts]}>
            <Router>
              <div>
                <div className="App">
                  <Switch>
                    <Route path="/home">
                      <Navbar />
                      <div className="dataCard">
                        {
                          products.map(data => <Home data={data} />)
                        }
                      </div>
                    </Route>
                    <Route exact path="/">
                      <Navbar />
                      <div className="dataCard">
                        {
                          products.map(data => <Home data={data} />)
                        }
                      </div>
                    </Route>
                    <PrivateRoute path="/checkout">
                      <Navbar /><CheckOut />
                    </PrivateRoute>
                    <Route path="/login">
                      <Navbar /><Login />
                    </Route>
                    <PrivateRoute path="/orders">
                      <Navbar /><div className="dataLine"><Orders /></div>
                    </PrivateRoute>

                    <PrivateRoute path="/addproducts">
                      <div className="d-flex justify-content-around">
                        <AdminBar /> <div className="productItems"> <AddProducts /> </div>
                      </div>
                    </PrivateRoute>
                    <PrivateRoute path="/productslist">
                      <div className="d-flex justify-content-around">
                        <AdminBar />
                        <div className="productItems d-flex flex-column bd-highlight mb-3">
                          {
                            products.map(data => <ProductList data={data} />)
                          }
                        </div>
                      </div>
                    </PrivateRoute>
                  </Switch>
                </div>
              </div>
            </Router>
          </ProductContext.Provider>
        </CheckoutContext.Provider>
      </UserContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
