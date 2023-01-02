import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import './App.css';
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
