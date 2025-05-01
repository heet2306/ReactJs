import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
  const { id } = useParams();
  const location = useLocation();
  const { name, age } = location.state || {};

  useEffect(() => {
    // Example Axios call
    axios.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then(res => console.log("Fetched user (from API):", res.data))
      .catch(err => console.error("Error fetching user:", err));
  }, [id]);

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
