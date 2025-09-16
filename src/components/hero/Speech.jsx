import { TypeAnimation } from 'react-type-animation';

const Speech = () => {
    return (
        <div className="bubbleContainer">
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        'Lorem ipsum dolor sit amet consectetur adipisicing.',
                        1000,
                        'Lorem ipsum dolor sit amet, consectetur adipisicing',
                        1000,
                    ]}
                    wrapper="span"
                    speed={40}
                    deletionSpeed={60}
                    /* omitDeletionAnimation */
                    repeat={Infinity}
                />
            </div>

            <img src="/man.png" alt="" />
        </div>
    )
}