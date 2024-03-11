import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import React, { useState } from 'react';


function App() {
  const [isLogedIn , setIsLoggedIn] = useState(false);
  return (
    <div className=" w-full h-screen bg-richblack-900 flex text-white flex-col">
      <Navbar  isLogedIn={isLogedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signUp' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      
    </div>
  );
}

export default App;
