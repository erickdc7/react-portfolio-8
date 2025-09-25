import { useInView } from "motion/react"
import { useEffect, useRef, useState } from "react"

const Counter = ({ from, to, text }) => {
    const [count, setCount] = useState(from)
    const ref = useRef()
    const isInView = useInView(ref)

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    

    return (
        <div className="counter" ref={ref}>
            <h1>{to}+</h1>
            <p>{text}</p>
        </div>
    )
}

export default Counter