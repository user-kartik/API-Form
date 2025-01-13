import React from 'react';
import './user.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card-container">
      <div className="user-card-header">
        <img src={user.picture.large} alt="User" />
      </div>
      <div className="user-card-content">
        <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.location.street.name}, {user.location.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
