import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './components/footer';
import { Navbar } from './components/nav';

import { Mainsite } from './components/main_site';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navbar/>

    <Mainsite> 
    
    <Routes>
      
    </Routes>
      
    </Mainsite>
    </HashRouter>
    
    
  );
}

export default App;
