import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AccountDetails from './components/accountDetails';
import Ops from './components/ops';
import Orders from './components/orders';
import ProductList from './components/productList';
import Home from './components/home';
import Footer from './components/footer';

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
      <Footer/>
    </div>
  );
}

export default App;
