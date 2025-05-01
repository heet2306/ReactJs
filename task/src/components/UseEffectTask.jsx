import React, { useEffect, useState } from 'react'

export default function UseEffectTask() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log("fetching data....");
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false)
            })
            .catch((error) => console.error("Error Fetching Data", error))

        return () => {
            console.log("Clean Upp Component unmounts ");
        }
    }, [])
    return (
        <div>
            {loading ? (<p>Loading.......</p>) : (
                <div>
                    <h2>{data.title}</h2>
                    <h3>{data.body}</h3>
                </div>
            )}
        </div>
    )
}

