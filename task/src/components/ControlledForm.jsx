import React, { useState } from 'react'

export default function ControlledForm() {
    const [name,setName]=useState('');
    const handleChange=(event)=>{ 
        setName(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Submitted Name:${name}`)
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}
