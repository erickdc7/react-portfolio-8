import { useState } from "react"

const Counter = ({ from, to, text }) => {
    const [count, setCount] = useState(from)

    return (
        <div className="counter">
            <h1>{to}+</h1>
            <p>{text}</p>
        </div>
    )
}

export default Counter