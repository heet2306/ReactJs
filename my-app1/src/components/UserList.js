import React from 'react';
import { Link } from 'react-router-dom';

function UserList({ users, onDelete }) {
  return (
    <div>
      <h2>User List</h2>
      <Link to="/add">Add New User</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email}) – 
            <Link to={`/edit/${user.id}`} style={{ margin: '0 10px' }}>Edit</Link>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
