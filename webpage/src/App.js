import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import React, { useState } from 'react';
import Private from './Components/Privateroute'


function App() {
  const [isLogedIn , setIsLoggedIn] = useState(false);
  return (
    <div className=" w-full h-screen bg-richblack-900 flex text-white flex-col">
      <Navbar  isLogedIn={isLogedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path='/' element={<Home isLogedIn={isLogedIn} />} />
        <Route path='/signin' element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signUp' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={
           <Private isLogedIn={isLogedIn}>
          <Dashboard />
        </Private>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
