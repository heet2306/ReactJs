import React, { useEffect, useState } from 'react'

export default function Crud() {
    const getInitialItems = () => JSON.parse(localStorage.getItem('items')) || [];
    const [items, setItems] = useState(getInitialItems)
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null)
    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(items))
    })
    const handleAdd = () => {
        if (input.trim() === '') return;
        if (editIndex !== null) {
            const updated = [...items]
            updated[editIndex] = input
            setItems(updated);
            setEditIndex(null)
        }
        else {
            setItems([...items, input])
        }
        setInput('');
    }
    const handleDelete = (index) => {
        setItems(items.filter((_, i) => i !== index))
    }
    const handleEdit = (index) => {
        setInput(items[index])
        setEditIndex(index)
    }
    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter Item' />
            
            <button onClick={handleAdd}>{editIndex !== null ? 'Updated' : 'Add'}</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}{''}
                        <button onClick={() => handleEdit(index)}>Edit</button>{''}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
