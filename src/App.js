import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Inventory from './components/pages/Inventory';
import Contacts from './components/pages/Contacts';
import SignUp from './components/pages/SignUp';
import PotteryInv from './components/pages/PotteryInv'
import MetalInv from './components/pages/MetalInv'
import WoodInv from './components/pages/WoodInv'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        {/* element={<Home/>} */}
          <Route path='/' exact Component={Home} /> 
          <Route path='/inventory' Component={Inventory} /> 
          <Route path='/contacts' Component={Contacts} /> 
          <Route path='/sign-up' Component={SignUp} /> 
          <Route path='/pottery' Component={PotteryInv} /> 
          <Route path='/metal' Component={MetalInv} /> 
          <Route path='/knickkancks' Component={WoodInv} /> 
        </Routes>
      </Router>  
    </>
  );
}

export default App;
