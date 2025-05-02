import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams();
  const location = useLocation();
  const { name, age } = location.state || {};

  return (
    <div>
      <h2>User Details Page</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserDetails;
