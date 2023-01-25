import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import ProjectA from './pages/ProjectA';
import ProjectB from './pages/ProjectB';
import ProjectC from './pages/ProjectC';
import ProjectD from './pages/ProjectD';
import Inquire from './pages/Inquire';



function App() {
 
 
  return (
    <BrowserRouter>
      <Routes>
          
        <Route path='/' element={<Home /> }/> 
        <Route path='Services' element={<Services /> }/> 
        <Route path='ProjectA' element={<ProjectA /> }/> 
        <Route path='ProjectB' element={<ProjectB /> }/> 
        <Route path='ProjectC' element={<ProjectC /> }/> 
        <Route path='Inquire'  element={<Inquire />  }/> 
        <Route path='ProjectD'  element={<ProjectD />  }/> 
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
