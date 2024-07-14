import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navibar from './components/Navibar';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/emrald" element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </>
  )
}

export default App
