import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Password from './pages/auth/Password';
import Register from './pages/auth/Register';
import HomePage from './pages/HomePage/HomePage';
import Product from './pages/Product/Product';

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
        </Routes>
      </Router>
    </>
  )
}

export default App
