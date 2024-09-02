import React from 'react';
import { contactData } from '../lib/data';

const Contact: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">{contactData.title}</h2>
      <p className="mt-4">Email: {contactData.email}</p>
      <p>Phone: {contactData.phone}</p>
      <p>Address: {contactData.address}</p>
    </div>
  );
};

export default Contact;
