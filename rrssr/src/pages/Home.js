import React from 'react'

const foo = () => {
    console.log("js alert!")
} 

export default function Home({location}) {
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => foo()}>Click Me</button>
        </div>
    )
}