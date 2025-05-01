import React, { useRef } from 'react'

export default function UnctrolledForm() {
    const nameRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Name:${nameRef.current.value}`)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
