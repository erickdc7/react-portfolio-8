import { TypeAnimation } from 'react-type-animation';

const Speech = () => {
    return (
        <div className="bubbleContainer">
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        'Lorem ipsum dolor sit amet consectetur adipisicing.',
                        1000,
                        'Lorem ipsum dolor sit amet, consectetur adipisicing',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>

            <img src="/man.png" alt="" />
        </div>
    )
}