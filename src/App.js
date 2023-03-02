import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapPage from './page/MapPage';

function App() {

  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
