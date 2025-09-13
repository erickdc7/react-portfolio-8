import "./hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hSection left">
                {/* TITLE */}
                <h1 className="hTitle">
                    Hey, There, <br />
                    <span>I am Erick!</span>
                </h1>

                {/* AWARDS */}
                <div className="awards">
                    <h2>Top Rated Designer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, veniam.</p>

                    <div className="awardList">
                        <img src="/award1.png" alt="" />
                        <img src="/award2.png" alt="" />
                        <img src="/award3.png" alt="" />
                    </div>
                </div>

                {/* SCROLL SVG */}
            </div>

            <div className="hSection right"></div>
        </div>
    )
}

export default Hero