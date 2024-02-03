import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
// import SignUp from './components/pages/SignUp';
import Cart from './components/pages/cart/Cart'
import PotteryInv from './components/pages/inventory/Pottery/PotteryInv'
import MetalInv from './components/pages/inventory/Metal/MetalInv'
import KnickKnackInv from './components/pages/inventory/Knickknack/KnickKnackInv'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        {/* element={<Home/>} */}
          <Route path='/' exact Component={Home} /> 
          <Route path='/cart' Component={Cart} /> 
          <Route path='/contacts' Component={Contacts} /> 
          {/* <Route path='/sign-up' Component={SignUp} />  */}
          <Route path='/pottery' Component={PotteryInv} /> 
          <Route path='/metal' Component={MetalInv} /> 
          <Route path='/knickknack' Component={KnickKnackInv} /> 
        </Routes>
      </Router>  
    </>
  );
}

export default App;
