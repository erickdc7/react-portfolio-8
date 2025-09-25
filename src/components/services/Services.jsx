import "./services.css"
import ComputerModelContainer from "../computerModel/ComputerModelContainer"
import Counter from "./Counter"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

const textVariants = {
    initial: {
        x: -100,
        y: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
}

const listVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        },
    },
}

const services = [
    {
        id: 1,
        img: "/service1.png",
        title: "Web Development",
        counter: 35,
    },
    {
        id: 2,
        img: "/service2.png",
        title: "Product Design",
        counter: 23,
    },
    {
        id: 2,
        img: "/service2.png",
        title: "Product Design",
        counter: 23,
    },
]

const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: "-200px" })

    return (
        <div className="services" ref={ref}>
            <div className="sSection left">
                <motion.h1
                    className="sTitle"
                    variants={textVariants}
                    animate={isInView ? "animate" : "initial"}
                >
                    How do I help?
                </motion.h1>

                <motion.div
                    className="serviceList"
                >
                    {
                        services.map((service) => (
                            <div className="service" key={service.id}>
                                <div className="serviceIcon">
                                    <img src={service.img} alt={service.title} />
                                </div>

                                <div className="serviceInfo">
                                    <h2>{service.title}</h2>
                                    <h3>{service.counter} Projects</h3>
                                </div>
                            </div>
                        ))
                    }
                </motion.div>

                <div className="counterList">
                    <Counter from={0} to={104} text="Projects Completed" />
                    <Counter from={0} to={72} text="Happy Clients" />
                </div>
            </div>

            <div className="sSection right">
                <ComputerModelContainer />
            </div>
        </div>
    )
}

export default Services