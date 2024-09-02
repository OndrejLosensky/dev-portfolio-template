// src/pages/Admin.tsx

import React, { useEffect } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';

const Admin: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="  ">      

      <div className="py-4 flex items-center justify-between px-8 w-screen bg-neutral-400">
        <Link to="/" className='px-4 py-2 rounded-md bg-rose-400 text-white'> Back to web  </Link>
        <nav className="flex space-x-4">
          <Link to="hero" className="bg-blue-500 text-white px-4 py-2 rounded">
            Hero
          </Link>
          <Link to="about" className="bg-blue-500 text-white px-4 py-2 rounded">
            About
          </Link>
          <Link to="projects" className="bg-blue-500 text-white px-4 py-2 rounded">
            Projects
          </Link>
          <Link to="services" className="bg-blue-500 text-white px-4 py-2 rounded">
            Services
          </Link>
          <Link to="contact" className="bg-blue-500 text-white px-4 py-2 rounded">
            Contact
          </Link>
        </nav>
      </div>

      <div className='p-8'>
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome to the admin panel! Here you can manage your content.</p>
      </div>

      <Outlet />
    </div>
  );
};

export default Admin;
