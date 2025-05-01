import React, { useState } from 'react'

export default function UseState() {
    const [message, setMessage] = useState("sdgffgfdjhfgjhgfgzgh")
    return (
        <>
            <p>{message}</p>
            <button onClick={() => setMessage("Updated Message")}>Update Message</button>
        </>
    )
}
 