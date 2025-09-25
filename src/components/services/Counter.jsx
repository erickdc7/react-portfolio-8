import { useInView } from "motion/react"
import { useRef, useState } from "react"

const Counter = ({ from, to, text }) => {
    const [count, setCount] = useState(from)
    const ref = useRef()
    const isInView = useInView(ref)

    return (
        <div className="counter" ref={ref}>
            <h1>{to}+</h1>
            <p>{text}</p>
        </div>
    )
}

export default Counter