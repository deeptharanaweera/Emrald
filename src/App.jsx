import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ItemView from './pages/ItemView';
import Login from './pages/Login';
import ItemViewMen from './pages/ItemViewMen';
import ItemViewKid from './pages/ItemViewKid';
import Womens from './pages/Womens';
import Mens from './pages/Mens';
import Kids from './pages/Kids';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/Emrald" element={<Home />} />
        <Route path='/Emrald/login' element={<Login />} />
        <Route path='/Emrald/itemview' element={<ItemView/>}/>
        <Route path='/Emrald/itemviewmen' element={<ItemViewMen/>}/>
        <Route path='/Emrald/itemviewkid' element={<ItemViewKid/>}/>
        <Route path='/Emrald/womens' element={<Womens/>}/>
        <Route path='/Emrald/mens' element={<Mens/>}/>
        <Route path='/Emrald/kids' element={<Kids/>}/>
      </Routes>
      
    </>
  )
}

export default App
