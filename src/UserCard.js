import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>ID: {user.id}</p>
      <p>City: {user.city}</p>
      <p>Contact: {user.contact}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserCard;
