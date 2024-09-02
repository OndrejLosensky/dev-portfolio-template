import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Admin from './pages/Admin';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
