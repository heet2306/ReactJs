import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
  ]);

  const addUser = (user) => {
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { ...user, id }]);
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map(user => user.id === id ? { ...updatedUser, id } : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/users" element={<UserList users={users} onDelete={deleteUser} />} />
        <Route path="/add" element={<AddUser onAdd={addUser} />} />
        <Route path="/edit/:id" element={<EditUser users={users} onUpdate={updateUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
