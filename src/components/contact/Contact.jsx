import "./contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <div className="cSection">
                <form action="">
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
                        <input type="text" placeholder="Jhon Doe" />
                    </div>
                </form>
            </div>

            <div className="cSection">

            </div>
        </div>
    )
}

export default Contact