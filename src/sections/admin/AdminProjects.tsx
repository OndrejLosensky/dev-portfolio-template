import React from 'react';

const AdminProjects: React.FC = () => {
  return (
    <div className="mt-8 p-8">
      <h2 className="text-2xl font-bold">Admin Projects Section</h2>
      <textarea 
        className="border p-2 rounded w-full" 
        placeholder="Edit Projects Section Content Here"
      />
    </div>
  );
};

export default AdminProjects;
