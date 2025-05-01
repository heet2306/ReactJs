// Conditinal rendering using a ternary operator 
import React, { useState } from 'react'

export default function Conditional() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const togglelogin=()=>{
        setIsLoggedIn((prevState)=>!prevState)
    }
    return (
        <div>
            <button onClick={togglelogin}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
            {isLoggedIn ? <h1>Welcom back</h1>: <h1>Please Log In</h1>}
        </div>
    )
}
