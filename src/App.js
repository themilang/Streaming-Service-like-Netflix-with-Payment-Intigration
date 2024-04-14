import React from 'react';
import './App.css';
import HomeSceen from './pages/HomeSceen';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Notfoundpage from './pages/Notfoundpage';
import Landing from '../src/pages/Landing';
import Screen1 from './pages/signup/Screen1';
import Screen2 from './pages/signup/Screen2';
import Screen3 from './pages/signup/Screen3';
import Screen4 from './pages/signup/Screen4';
import Screen5 from './pages/signup/Screen5';

function App() {
  return (
    <Routes>
<Route path='/home' element={<HomeSceen/>}/>
<Route path='/' element={<Landing/>}/>
<Route path='/registration?' element={<Screen1/>}/>
<Route path='signup/regform' element={<Screen2/>}/>
<Route path='signup/plans?' element={<Screen3/>}/>
<Route path='signup/plansform' element={<Screen4/>}/>
<Route path='signup/paymentPicker' element={<Screen5/>}/>




<Route path='/signin' element={<Login/>}/>

<Route path='*' element={<Notfoundpage/>}/>
    </Routes>
   
    
  
  );
}

export default App;
