import React from 'react';

const AdminAbout: React.FC = () => {
  return (
    <div className="mt-8 p-8">
      <h2 className="text-2xl font-bold">Admin About Section</h2>
      <textarea 
        className="border p-2 rounded w-full" 
        placeholder="Edit About Section Content Here"
      />
    </div>
  );
};

export default AdminAbout;
