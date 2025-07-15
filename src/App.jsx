import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Password from './pages/Auth/Password';
import Register from './pages/Auth/Register';
import HomePage from './pages/HomePage/HomePage';
import DetailProduct from './pages/Product/[id]/DetailProduct';
import Profile from './pages/Profile/Profile';
import ProductList from './pages/Product/Product';
import Order from './pages/Order/Order';
import KycData from './pages/KnowYourCustomer/KycData';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <HomePage />
              </>
            }
          />  
          <Route
            path='/login'
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path='/register'
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path='/password'
            element={
              <>
                <Password />
              </>
            }
          />
          <Route
            path='/kycdata'
            element={
              <>
                <KycData />
              </>
            }
          />
          <Route
            path='/product'
            element={
              <>
                <ProductList />
              </>
            }
          />
          <Route
            path='/product/:id'
            element={
              <>
                <DetailProduct />
              </>
            }
          />
          <Route
            path='/order'
            element={
              <>
                <Order />
              </>
            }
          />
          <Route
            path='/profile'
            element={
              <>
                <Profile />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
