import React, { useEffect } from 'react'
function App() {
  useEffect(()=>{
    console.log("How are you!!!!");
  })
}
export default function About() {
  return (
    <>
      <h1>check console{App()}</h1>
    </>
  )
}
// 1.Using JavaScript Expressions in JSX
// 2.Using JavaScript Function
// 3.Using Inline JavaScript in Event Handlers
// 4.Using JavaScript Variables and Objects 
// 5.Using JavaScript Inside useEffect Hook
// The useEffect Hook allows you to perform side effects in your components.
// 6.Using External JavaScript File 
