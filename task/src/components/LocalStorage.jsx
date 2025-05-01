import React, { useEffect, useState } from 'react'

export default function LocalStorage() {

    const savedTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState(savedTheme || 'light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className={`app${theme}`}>
            <h1>Current Theme :{theme}</h1>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Click Here</button>
        </div>
    )
}
