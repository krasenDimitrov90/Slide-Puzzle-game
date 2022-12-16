import React from "react";
import { usePuzzleContext } from "../../contexts/PuzzleContext";

import './Timer.styles.css';

const Timer = () => {
    const { minutes, seconds } = usePuzzleContext();

    return (
        <div className="timer">{`${minutes} : ${seconds}`}</div>
    );
};

export default Timer;