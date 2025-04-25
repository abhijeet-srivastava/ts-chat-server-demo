import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import AnotherScreen from './AnotherPage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/another" element={<AnotherScreen/>}></Route>
      </Routes>
      </header>
    </div>
  );
}

export default App;
