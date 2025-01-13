import React, { useState } from 'react';
import UserCard from './UserCard';
import './api.css'

const APIPage = () => {
  const [user, setUser] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={fetchUserDetails}>Fetch User Details</button>
      {user && <UserCard user={user} />}
    </div>
  );
};

export default APIPage;
