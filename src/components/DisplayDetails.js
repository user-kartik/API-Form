import React from 'react';
import { useLocation } from 'react-router-dom';
import './disp.css';  

const DisplayDetails = () => {
  const { state } = useLocation();
  const { name, phone, email, dob, address } = state || {};

  return (
    <div className="containe">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>DOB:</strong> {dob}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default DisplayDetails;
