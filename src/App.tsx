import { Helmet } from 'react-helmet';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Admin from './pages/Admin';
import Login from './pages/Login';
import AdminAbout from './sections/admin/AdminAbout';
import AdminProjects from './sections/admin/AdminProjects';
import AdminServices from './sections/admin/AdminServices';
import AdminContact from './sections/admin/AdminContact';
import AdminHero from './sections/admin/AdminHero';
import Projects from './pages/Projects';

import favicon from "../public/favicon.svg";

const App: React.FC = () => {
  return (
    <div className=''>
      <Helmet>
        <title>Dev Portfolio</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="hero" element={<AdminHero />} />
            <Route path="about" element={<AdminAbout />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="contact" element={<AdminContact />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;
