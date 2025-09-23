import "./services.css"
import ComputerModelContainer from "../computerModel/ComputerModelContainer"

const textVariants {
    
}

const Services = () => {
    return (
        <div className="services">
            <div className="sSection left">
                <h1 className="sTitle">How do I help?</h1>
                <div className="serviceList">
                    <div className="section"></div>
                </div>
            </div>

            <div className="sSection right">
                <ComputerModelContainer />
            </div>
        </div>
    )
}

export default Services