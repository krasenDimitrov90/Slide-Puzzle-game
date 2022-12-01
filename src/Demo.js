import React from 'react';

import { useSpring, animated } from '@react-spring/web';
import DemoElement from './DemoElement';

import './Demo.css';

const initElements = ['one', 'two', 'three'];


export default function Demo(props) {

    const [elements, setElements] = React.useState(initElements);

    const setElementsHandler = () => {
        setElements((oldElements) => {
            let newElements = [...oldElements];
            [newElements[0], newElements[2]] = [newElements[2], newElements[0]];

            return newElements;
        });
    }

    return (
        <>
            {elements.map(e => {
                return (
                    <DemoElement
                        key={e}
                        content={e}
                        setElementsHandler={setElementsHandler}
                    />
                );
            })}
        </>
    );
}