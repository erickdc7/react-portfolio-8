import { useRef } from "react";
import "./contact.css"
import { motion, useInView } from "motion/react"

const listVariants = {
    initial: {
        x: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
        }
    }
};

const Contact = () => {
    const isInView = useInView(ref, { margin: "-200px" })

    const form = useRef();

    return (
        <div className="contact">
            <div className="cSection">
                <motion.form action="">
                    <h1 className="cTitle">
                        Let`&apos;`s keep in touch
                    </h1>

                    <div className="formItem">
                        <label>Name</label>
                        <input type="text" placeholder="Jhon Doe" />
                    </div>

                    <div className="formItem">
                        <label>Email</label>
                        <input type="email" placeholder="jhon@gmail.com" />
                    </div>

                    <div className="formItem">
                        <label>Message</label>
                        <textarea rows={10} placeholder="Write your message..."></textarea>
                    </div>

                    <button className="formButton">Send</button>
                </motion.form>
            </div>

            <div className="cSection">

            </div>
        </div>
    )
}

export default Contact