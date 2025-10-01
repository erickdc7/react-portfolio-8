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
                <motion.form
                    variants={listVariants}
                    animate={isInView ? "animate" : "initial"}
                >
                    <motion.h1
                        className="cTitle"
                        variants={listVariants}
                    >
                        Let`&apos;`s keep in touch
                    </motion.h1>

                    <motion.div
                        className="formItem"
                        variants={listVariants}
                    >
                        <label>Name</label>
                        <input type="text" placeholder="Jhon Doe" />
                    </motion.div>

                    <motion.div
                        variants={listVariants}
                        className="formItem"
                    >
                        <label>Email</label>
                        <input type="email" placeholder="jhon@gmail.com" />
                    </motion.div>

                    <motion.div className="formItem">
                        <label>Message</label>
                        <textarea rows={10} placeholder="Write your message..."></textarea>
                    </motion.div>

                    <motion.button
                        className="formButton"
                    >
                        Send
                    </motion.button>
                </motion.form>
            </div>

            <div className="cSection">

            </div>
        </div>
    )
}

export default Contact