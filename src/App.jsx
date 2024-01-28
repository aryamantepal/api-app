import React from 'react'
import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Weather from './pages/Weather';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/weather' element={<Weather />} />
        </Routes>
      </Router>
    </div>
  )
}
