import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Password from './pages/Auth/Password';
import Register from './pages/Auth/Register';
import HomePage from './pages/HomePage/HomePage';
import Product from './pages/Product/Product';
import DetailProduct from './pages/Product/[id]/DetailProduct';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
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
            path='/homepage'
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            path='/product'
            element={
              <>
                <Product />
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
        </Routes>
      </Router>
    </>
  )
}

export default App
