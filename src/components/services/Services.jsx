import "./services.css"
import ComputerModelContainer from "../computerModel/ComputerModelContainer"

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
    return (
        <div className="services">
            <div className="sSection left">
                <h1 className="sTitle">How do I help?</h1>
                <div className="serviceList">
                    <div className="section">
                        {
                            services.map((service) => (
                                <div className="section"></div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="sSection right">
                <ComputerModelContainer />
            </div>
        </div>
    )
}

export default Services