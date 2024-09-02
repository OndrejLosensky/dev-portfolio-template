import React from 'react';

const AdminContact: React.FC = () => {
  return (
    <div className="mt-8 p-8">
      <h2 className="text-2xl font-bold">Admin Contact Section</h2>
      <textarea 
        className="border p-2 rounded w-full" 
        placeholder="Edit Contact Section Content Here"
      />
    </div>
  );
};

export default AdminContact;
