import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser({ onAdd }) {
    const [form, setForm] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        onAdd(form);
        navigate('/users');
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={form.name}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={form.email}
                        required
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddUser;
