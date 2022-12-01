import React from "react";

import { useSpring, animated,  } from '@react-spring/web';


export default function DemoElement(props) {

    const [xVar, setXVar] = React.useState(Math.floor(Math.random() * 100));


    const [styles, animate] = useSpring(() => (
        { x: xVar }
    ));

    animate.start({ x: xVar })

    const clickHandler = () => {
        if (xVar === 0) {
            setXVar(100);
        } else {
            setXVar(0);

        }
        

        // props.setElementsHandler();
    }


    return (
        <animated.h2
            style={styles}
            onClick={clickHandler}
        >
            ${props.content}
        </animated.h2>
    );
}