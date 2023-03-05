import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapPage from './pages/MapPage';
import MainPage from './pages/MainPage';

function App() {

  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/searchResults" element={<MapPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
