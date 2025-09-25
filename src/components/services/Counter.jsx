import { useRef, useState } from "react"

const Counter = ({ from, to, text }) => {
    const [count, setCount] = useState(from)
    const ref = useRef()

    return (
        <div className="counter" ref={ref}>
            <h1>{to}+</h1>
            <p>{text}</p>
        </div>
    )
}

export default Counter