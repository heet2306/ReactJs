// Working With Events 
// import React, { useState } from 'react'

// export default function Event() {
//     const [message,setMessage]=useState('');
//     const handleClick=()=>{
//             setMessage("Button Clicked!")
//     }
//   return (
//     <div>
//         <button onClick={handleClick}>Click Here</button>
//         <p>{message}</p>
//     </div>
//   )
// }

// passing arguments to event handlers 
import React, { useState } from 'react'

export default function Event() {
    const [message, setMessage] = useState('');
    const handleClick = (name) => {
        setMessage(name)
    }
    return (
        <div>
            <button onClick={()=>handleClick('fdhf')}>Click Here</button>
            <p>Hello,{message}</p>
        </div>
    )
}
