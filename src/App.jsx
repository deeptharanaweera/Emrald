import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ItemView from './pages/ItemView';
import Login from './pages/Login';
import ItemViewMen from './pages/ItemViewMen';
import ItemViewKid from './pages/ItemViewKid';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/emrald" element={<Home />} />
        <Route path='/emrald/login' element={<Login />} />
        <Route path='/emrald/itemview' element={<ItemView/>}/>
        <Route path='/emrald/itemviewmen' element={<ItemViewMen/>}/>
        <Route path='/emrald/itemviewkid' element={<ItemViewKid/>}/>
      </Routes>
      
    </>
  )
}

export default App
