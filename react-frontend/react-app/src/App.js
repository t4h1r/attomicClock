import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";
import AccountDetails from './components/accountDetails';
import Ops from './components/ops';
import Orders from './components/orders';
import ProductList from './components/productList';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
          path ="/"
          element={<Home />}          
          />
          <Route
            path="/productListings"
            element={<ProductList />}
          />
          <Route
            path="/accountDetails"
            element={<AccountDetails />}
          />
          <Route
            path="/orders"
            element={<Orders />}
          />
          <Route
            path="/ops"
            element={<Ops />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
