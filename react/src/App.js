import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import { ReactDOM } from 'react-dom';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<Home /> }/> 
    <Route path='Services' element={<Services /> }/> 
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
