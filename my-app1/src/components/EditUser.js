import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser({ users, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '' });

  useEffect(() => {
    const user = users.find(u => u.id === parseInt(id));
    if (user) setForm(user);
  }, [id, users]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(parseInt(id), form);
    navigate('/users');
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} required />
        <input name="email" value={form.email} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditUser;
