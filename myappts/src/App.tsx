import React from 'react';
import logo from './logo.svg';
import './App.css';
import TrangChu from './pages/TrangChu';
import HaiSan from './pages/HaiSan';
import NongSan from './pages/NongSan';
import LamSan from './pages/LamSan';
import SanSan from './pages/SanSan';
import Nuoc from './pages/Nuoc';
import NavigateHeader from './pages/Navigate'
import { BrowserRouter , Route,  Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigateHeader></NavigateHeader>
      <Routes>
        <Route path="/" element={<TrangChu/>} />
        <Route path="/haisan" element={<HaiSan/>} />
        <Route path="/nongsan" element={<NongSan/>} />
        <Route path="/lamsan" element={<LamSan/>} />
        <Route path="/sansan" element={<SanSan/>} />
        <Route path="/nuoc" element={<Nuoc/>} />
      </Routes>
    </BrowserRouter>
   
      
    </div>
  );
}

export default App;
