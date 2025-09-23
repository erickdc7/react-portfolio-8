import "./services.css"
import ComputerModelContainer from "../computerModel/ComputerModelContainer"

const Services = () => {
    return (
        <div className="services">
            <div className="sSection left">
                <h1>How do I help?</h1>
            </div>

            <div className="sSection right">
                <ComputerModelContainer />
            </div>
        </div>
    )
}

export default Services